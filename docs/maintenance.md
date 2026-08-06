# Maintenance Guide

Internal reference for maintainers of Awesome Speech AI.

## Link Check Strategy

### Tool

[lychee](https://github.com/lycheeverse/lychee) v0.18.1, run via the [lychee-action](https://github.com/lycheeverse/lychee-action) GitHub Action.

### Schedule

- **Monthly** on the 1st at 07:17 UTC (`cron: "17 7 1 * *"`).
- Also triggerable manually via `workflow_dispatch`.
- The job uses `continue-on-error: true` and `fail: false` -- it never blocks other workflows.

### Configuration

Flags passed to lychee (in `.github/workflows/link-check.yml`):

| Flag | Value | Purpose |
| ------ | ------- | --------- |
| `--max-retries` | 3 | Retry transient failures |
| `--max-connections` | 4 | Avoid hammering hosts |
| `--timeout` | 30 | Per-request timeout (seconds) |
| `--accept` | 200,204,301,302,403,429 | Treat redirects and rate-limit responses as valid |
| `--exclude-mail` | -- | Skip `mailto:` links |

### Allowlist (LYCHEE_EXCLUDE)

Domains excluded from checks because they rate-limit or block CI:

```text
shields.io, img.shields.io, arxiv.org, doi.org, scholar.google.com, ieeexplore.ieee.org, openreview.net
```

To add a new exclusion, edit the `LYCHEE_EXCLUDE` regex in `.github/workflows/link-check.yml`.

### Reports

Every run uploads a `link-check-report` artifact (retained 30 days). Review it to identify broken links that need fixing.

## Update Workflow: Adding Resources

1. **Fork and branch** from `main`.
2. **Add the entry** to `README.md` following the format in `CONTRIBUTING.md`.
3. **Mirror the change** in `README.zh.md` at the same structural position.
4. If adding a new section heading, register the Chinese mapping in `scripts/check-readme-structure.mjs`.
5. **Run locally**:

   ```bash
   npm run validate
   ```

6. **Open a PR**. CI will run `awesome-lint`, structural isomorphism check, and entry dedup check.
7. **Maintainer review** and merge.

## CI/CD Pipeline

### `quality` (on every push and PR)

Runs `node scripts/validate-maintenance.mjs`, which chains five checks:

1. **candidate ledger** -- when `.codex/local/candidate-ledger.jsonl` exists, checks candidate fields, evidence levels, normalized URLs, and that accepted candidates are present in both READMEs. CI skips this private local stage when `.codex/` is absent.
2. **awesome-lint** -- enforces awesome-list formatting rules on `README.md`.
3. **README structure** -- verifies `README.md` and `README.zh.md` have identical heading hierarchies and normalized curated-entry URL order (via canonical mapping).
4. **README entries** -- checks for duplicate entries across sections.
5. **Public boundary** -- rejects private maintenance paths in tracked or staged files, including `.codex/`, `.claude/`, and local reports.

All five must pass for the workflow to succeed.

### `link-check` (monthly + manual)

Advisory link validation (see above). Does not block merges.

## Release / Changelog Habits

This repository does not use versioned releases or a changelog file. Updates are continuous:

- New entries are merged as PRs to `main`.
- Significant structural changes (new top-level sections, taxonomy shifts) are noted in the PR description.
- If a release tag becomes useful in the future, adopt [Keep a Changelog](https://keepachangelog.com/) format and tag with semver.

## Local Hook Setup

Pre-commit hooks run the same validation as CI:

```bash
npm install          # triggers prepare script -> installs hooks
# or explicitly:
npm run hooks:install
```

The hook executes `node scripts/validate-maintenance.mjs` before every commit.

## Candidate Discovery and Evidence Workflow

Candidate research uses a private JSONL ledger at `.codex/local/candidate-ledger.jsonl`.

1. Read the current README headings and entries before searching.
2. Normalize and deduplicate candidate URLs, titles, and GitHub owner/repository identities locally.
3. Search in bounded lanes: official GitHub repositories, official documentation/papers/releases, and social posts as discovery leads.
4. Treat X/Twitter, blogs, news, and community posts as discovery evidence only. Final entries require an official long-lived source and a second official or near-official source.
5. Record `accepted`, `rejected`, `deferred`, or `recheck` status with overlap notes and decision reasons.
6. Update both README files only after evidence and category fit are confirmed.
7. Run `node scripts/validate-maintenance.mjs` before handing off the local diff.
