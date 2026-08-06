import { readFile } from 'node:fs/promises';
import { access } from 'node:fs/promises';

const ledgerPath = '.codex/local/candidate-ledger.jsonl';
const requiredFields = [
  'name',
  'canonical_url',
  'category',
  'source_urls',
  'discovery_sources',
  'evidence_level',
  'first_seen',
  'last_verified',
  'status',
  'overlap_notes',
  'decision_reason',
];
const statuses = new Set(['accepted', 'rejected', 'deferred', 'recheck']);
const evidenceLevels = new Set(['A', 'B', 'C']);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function normalizeUrl(value) {
  const url = new URL(value);
  url.hash = '';
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
  url.protocol = url.protocol.toLowerCase();
  url.pathname = url.pathname.replace(/\/+$/, '') || '/';
  url.searchParams.sort();
  return url.toString();
}

function assertDate(value, field, lineNumber) {
  if (!datePattern.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`line ${lineNumber}: ${field} must be an ISO date (YYYY-MM-DD)`);
  }
}

if (!(await exists(ledgerPath))) {
  console.log(`Candidate ledger skipped: ${ledgerPath} not present.`);
  process.exit(0);
}

const [ledgerText, readmeEn, readmeZh] = await Promise.all([
  readFile(ledgerPath, 'utf8'),
  readFile('README.md', 'utf8'),
  readFile('README.zh.md', 'utf8'),
]);

function extractReadmeUrls(text) {
  const urls = new Set();
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^- \[[^\]]+\]\(([^)]+)\)/);
    if (!match) continue;
    if (!/^https?:\/\//i.test(match[1])) continue;
    urls.add(normalizeUrl(match[1]));
  }
  return urls;
}

const readmeUrlsEn = extractReadmeUrls(readmeEn);
const readmeUrlsZh = extractReadmeUrls(readmeZh);

const records = [];
const seenUrls = new Map();
for (const [index, rawLine] of ledgerText.split(/\r?\n/).entries()) {
  const lineNumber = index + 1;
  const line = rawLine.trim();
  if (!line) continue;

  let record;
  try {
    record = JSON.parse(line);
  } catch (error) {
    throw new Error(`line ${lineNumber}: invalid JSON (${error.message})`);
  }

  for (const field of requiredFields) {
    if (!(field in record)) {
      throw new Error(`line ${lineNumber}: missing required field ${field}`);
    }
  }

  if (typeof record.name !== 'string' || !record.name.trim()) {
    throw new Error(`line ${lineNumber}: name must be a non-empty string`);
  }
  if (typeof record.category !== 'string' || !record.category.includes(' > ')) {
    throw new Error(`line ${lineNumber}: category must use "Parent > Child" form`);
  }
  if (!statuses.has(record.status)) {
    throw new Error(`line ${lineNumber}: unsupported status ${record.status}`);
  }
  if (!evidenceLevels.has(record.evidence_level)) {
    throw new Error(`line ${lineNumber}: unsupported evidence_level ${record.evidence_level}`);
  }
  if (!Array.isArray(record.source_urls) || record.source_urls.length === 0) {
    throw new Error(`line ${lineNumber}: source_urls must be a non-empty array`);
  }
  if (!Array.isArray(record.discovery_sources) || record.discovery_sources.length === 0) {
    throw new Error(`line ${lineNumber}: discovery_sources must be a non-empty array`);
  }
  if (typeof record.overlap_notes !== 'string' || typeof record.decision_reason !== 'string') {
    throw new Error(`line ${lineNumber}: overlap_notes and decision_reason must be strings`);
  }

  const canonicalUrl = normalizeUrl(record.canonical_url);
  const sourceUrls = record.source_urls.map((url) => normalizeUrl(url));
  if (!sourceUrls.includes(canonicalUrl)) {
    throw new Error(`line ${lineNumber}: canonical_url must also appear in source_urls`);
  }
  for (const url of record.discovery_sources) {
    if (typeof url !== 'string' || !url.trim()) {
      throw new Error(`line ${lineNumber}: discovery_sources must contain non-empty strings`);
    }
  }
  assertDate(record.first_seen, 'first_seen', lineNumber);
  assertDate(record.last_verified, 'last_verified', lineNumber);

  if (seenUrls.has(canonicalUrl)) {
    throw new Error(`line ${lineNumber}: duplicate canonical_url; first seen on line ${seenUrls.get(canonicalUrl)}`);
  }
  seenUrls.set(canonicalUrl, lineNumber);

  if (record.status === 'accepted') {
    if (record.evidence_level !== 'A' || sourceUrls.length < 2) {
      throw new Error(`line ${lineNumber}: accepted candidates require evidence_level A and at least two source_urls`);
    }
    if (!readmeUrlsEn.has(canonicalUrl) || !readmeUrlsZh.has(canonicalUrl)) {
      throw new Error(`line ${lineNumber}: accepted candidate must be present in both README files: ${record.canonical_url}`);
    }
    if (!readmeEn.includes(`### ${record.category}`)) {
      throw new Error(`line ${lineNumber}: category is not an existing README heading: ${record.category}`);
    }
  }

  records.push({ ...record, canonicalUrl, sourceUrls });
}

if (records.length === 0) {
  throw new Error('Candidate ledger is empty. Add at least one candidate record.');
}

console.log(`Candidate ledger OK: ${records.length} records, ${records.filter((record) => record.status === 'accepted').length} accepted.`);
