import { spawnSync } from 'node:child_process';

const checks = [
  {
    label: 'awesome-lint',
    script: 'scripts/run-awesome-lint.mjs',
  },
  {
    label: 'README structure',
    script: 'scripts/check-readme-structure.mjs',
  },
  {
    label: 'README entries',
    script: 'scripts/check-readme-entries.mjs',
  },
];

for (const check of checks) {
  console.log(`==> ${check.label}`);
  const result = spawnSync(process.execPath, [check.script], {
    stdio: 'inherit',
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log('Maintenance validation OK.');
