import { readFile } from 'node:fs/promises';

const files = ['README.md', 'README.zh.md'];
const entryPattern = /^- \[([^\]]+)\]\(([^)]+)\)/;

for (const file of files) {
  const text = await readFile(file, 'utf8');
  const byTitle = new Map();
  const byUrl = new Map();

  for (const [index, line] of text.split(/\r?\n/).entries()) {
    const match = line.match(entryPattern);
    if (!match) {
      continue;
    }

    const title = match[1].trim().toLowerCase();
    const url = match[2].trim().toLowerCase();
    const lineNumber = index + 1;

    byTitle.set(title, [...(byTitle.get(title) ?? []), lineNumber]);
    byUrl.set(url, [...(byUrl.get(url) ?? []), lineNumber]);
  }

  const titleDuplicates = [...byTitle.entries()].filter(([, lines]) => lines.length > 1);
  const urlDuplicates = [...byUrl.entries()].filter(([, lines]) => lines.length > 1);

  if (titleDuplicates.length > 0 || urlDuplicates.length > 0) {
    console.error(`Duplicate README entries detected in ${file}:`);
    for (const [title, lines] of titleDuplicates) {
      console.error(`  duplicate title "${title}" at lines ${lines.join(', ')}`);
    }
    for (const [url, lines] of urlDuplicates) {
      console.error(`  duplicate url "${url}" at lines ${lines.join(', ')}`);
    }
    process.exit(1);
  }
}

console.log('README entry uniqueness OK.');
