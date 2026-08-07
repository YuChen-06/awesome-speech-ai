import { spawnSync } from 'node:child_process';

const checks = [
  {
    label: 'awesome-lint',
    command: process.execPath,
    args: ['node_modules/awesome-lint/cli.js', 'README.md'],
  },
  {
    label: 'README structure',
    command: process.execPath,
    args: ['scripts/check-readme-structure.mjs'],
  },
  {
    label: 'README entries',
    command: process.execPath,
    args: ['scripts/check-readme-entries.mjs'],
  },
  {
    label: 'public boundary',
    command: process.execPath,
    args: ['scripts/check-public-boundary.mjs'],
  },
];

for (const check of checks) {
  console.log(`==> ${check.label}`);
  const result = spawnSync(check.command, check.args, {
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log('Maintenance validation OK.');
