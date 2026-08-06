import { execFileSync } from 'node:child_process';

const privatePathPattern = /^(?:\.codex\/|\.playwright-mcp\/|\.claude\/|RULES\.md$|lychee(?:\/|[-.]))/;

function gitLines(args) {
  return execFileSync('git', args, { encoding: 'utf8' })
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

const tracked = gitLines(['ls-files']);
const staged = gitLines(['diff', '--cached', '--name-only', '--diff-filter=ACDMRTUXB']);
const leaked = [...new Set([...tracked, ...staged].filter((path) => privatePathPattern.test(path)))];

if (leaked.length > 0) {
  console.error('Private maintenance path is tracked or staged:');
  for (const path of leaked) console.error(`- ${path}`);
  process.exit(1);
}

console.log('Public boundary OK: no private maintenance path is tracked or staged.');
