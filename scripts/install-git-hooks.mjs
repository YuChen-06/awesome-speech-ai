import { chmodSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';

function runGit(args) {
  return spawnSync('git', args, {
    stdio: 'pipe',
    encoding: 'utf8',
  });
}

const revParse = runGit(['rev-parse', '--show-toplevel']);

if (revParse.status !== 0) {
  console.log('Skipping git hook installation: not inside a Git worktree.');
  process.exit(0);
}

const repoRoot = revParse.stdout.trim();
const huskyDir = path.join(repoRoot, '.husky');
const preCommitHook = path.join(huskyDir, 'pre-commit');
const preCommitBody = '#!/usr/bin/env sh\nnode scripts/validate-maintenance.mjs\n';

if (!repoRoot || !existsSync(path.join(repoRoot, '.git'))) {
  console.log('Skipping git hook installation: repository layout not detected.');
  process.exit(0);
}

mkdirSync(huskyDir, { recursive: true });
writeFileSync(preCommitHook, preCommitBody, 'utf8');

try {
  chmodSync(preCommitHook, 0o755);
} catch (error) {
  console.warn(`Warning: unable to chmod ${preCommitHook}: ${error.message}`);
}

const hookPath = '.husky';
const hookPathResult = runGit(['config', 'core.hooksPath', hookPath]);

if (hookPathResult.status !== 0) {
  console.error(`Failed to configure git core.hooksPath to ${hookPath}`);
  process.exit(hookPathResult.status ?? 1);
}

const currentHookPath = runGit(['config', '--get', 'core.hooksPath']);
const resolvedHookPath = currentHookPath.status === 0 ? currentHookPath.stdout.trim() : hookPath;

console.log(`Configured git core.hooksPath -> ${resolvedHookPath}`);
console.log(`Ensured local pre-commit hook -> ${path.relative(repoRoot, preCommitHook)}`);
