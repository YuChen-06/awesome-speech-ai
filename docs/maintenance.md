# Maintenance Guide

Internal reference for maintainers of Awesome Speech AI. Contributor rules (entry format, bilingual sync, hygiene) live in [CONTRIBUTING.md](../CONTRIBUTING.md).

## Link Check Strategy

### Tool

[lychee](https://github.com/lycheeverse/lychee) v0.18.1, run via the [lychee-action](https://github.com/lycheeverse/lychee-action) GitHub Action.

### Schedule

- **Monthly** on the 1st at 07:17 UTC (`cron: "17 7 1 * *"`).
- Also triggerable manually via `workflow_dispatch`.
- The job uses `continue-on-error: true` and `fail: true` -- broken links turn the run red, but it never blocks other workflows.

### Configuration

Flags passed to lychee (in `.github/workflows/link-check.yml`):

| Flag | Value | Purpose |
| ------ | ------- | --------- |
| `--max-retries` | 3 | Retry transient failures |
| `--max-concurrency` | 4 | Avoid hammering hosts |
| `--timeout` | 30 | Per-request timeout (seconds) |
| `--accept` | 200,204,301,302,403,429 | Treat redirects and rate-limit responses as valid |
| `--exclude-mail` | -- | Skip `mailto:` links |

### Allowlist (`--exclude`)

Domains excluded from checks because they rate-limit or block CI:

```text
shields.io, img.shields.io, arxiv.org, doi.org, scholar.google.com, ieeexplore.ieee.org, openreview.net
```

To add a new exclusion, edit the `--exclude` regex in the lychee `args` in `.github/workflows/link-check.yml`.

### Reports

Every run uploads a `link-check-report` artifact (retained 30 days). Review it to identify broken links that need fixing.

## CI/CD Pipeline

### `quality` (on every push and PR)

Runs `node scripts/validate-maintenance.mjs`, which chains four public checks:

1. **awesome-lint** -- enforces awesome-list formatting rules on `README.md`.
2. **README structure** -- verifies `README.md` and `README.zh.md` have identical heading hierarchies and normalized curated-entry URL order (via canonical mapping).
3. **README entries** -- checks for duplicate entries across sections.
4. **Public boundary** -- rejects private maintenance paths in tracked or staged files, including local-only tooling and reports.

All four must pass for the workflow to succeed.

### `link-check` (monthly + manual)

Non-blocking link validation (see above). A red run means broken links to fix; it never blocks merges.
