# Contributing

Thanks for contributing to Awesome Speech AI.

## Principles

- This is a curated list, not an exhaustive directory.
- Every entry must meet the quality bar:
  - Verifiable (the link is accessible and the project/paper exists)
  - Unique (no duplicates: same repo / same paper / same alias)
  - Readable (a clear one-line description)
  - Correctly categorized (follow the README taxonomy)
- Keep entries in a section in a consistent order (recommended: alphabetical).
- Prefer official sources (GitHub repo, official website, arXiv/publisher PDF) over re-uploads or aggregators.

## Local Validation

Before opening a PR, run:

```bash
npm install
npm run validate
```

If your local shell wrapper around `npm` is unstable, run the same checks directly through Node:

```bash
node scripts/validate-maintenance.mjs
```

This repository validates:

- awesome-list formatting via `awesome-lint`
- README / README.zh structural isomorphism
- duplicate README entries across sections

## Local Hooks

This repository can install a local `pre-commit` hook that runs the same maintenance harness before every commit.

Install hooks manually with:

```bash
npm run hooks:install
```

Or rely on the automatic install path:

```bash
npm install
```

The `prepare` script configures:

- `git config core.hooksPath .husky`
- a local `.husky/pre-commit` hook that runs `node scripts/validate-maintenance.mjs`

If you work in an unusual shell environment, you can still run the exact same guardrail manually:

```bash
node scripts/install-git-hooks.mjs
node scripts/validate-maintenance.mjs
```

## Repository Hygiene

Track only the canonical repository assets:

- `README.md` and `README.zh.md`
- contributor and rules documents
- lightweight maintenance assets such as `.github/` and `scripts/`
- minimal package and lint configuration required to run validation

Do not add local-only state or generated artifacts such as:

- `.codex/` workspace files
- `.husky/` locally generated hook files
- dependency directories and caches
- logs, temporary files, or downloaded intermediate data
- one-off personal notes or ad-hoc script output

## Where to submit

- Submit a Pull Request that updates `README.md`.
- Maintainers will review the PR and may request additional details.

## Entry format

### Tools / Projects

```markdown
- [Project Name](link) - One-line description.
```

- Keep the description short and concrete.

### Papers

```markdown
- **Paper Title** (Year), Authors et al. [pdf](link) [code](optional)
```

- Year is required; prefer arXiv or the publisher's official PDF.

## De-duplication

Before submitting, please check:

- Whether the same repository already exists
- Whether the same paper already exists (same title / same arXiv ID)
- Whether the same entry is already linked in another section; prefer a cross-reference note over duplicating it

## Adding a New Section

1. Open an Issue first describing the proposed section and why it belongs in the list.
2. Add the new `##` or `###` heading to **both** `README.md` and `README.zh.md` in the same position.
3. Update the `Contents` table in `README.md` (and its Chinese counterpart in `README.zh.md`).
4. If adding a Chinese heading, register its canonical mapping in `scripts/check-readme-structure.mjs`.
5. Run `npm run validate` to confirm the bilingual structure check passes.

## Bilingual Sync Requirements

This repository maintains parallel English (`README.md`) and Chinese (`README.zh.md`) versions. CI enforces **structural isomorphism**: every heading in `README.md` must have a corresponding heading in `README.zh.md` at the same position and nesting level.

Rules:

- When you add, remove, or reorder a section in one file, do the same in the other.
- New Chinese headings must be registered in the `zhToCanonical` map in `scripts/check-readme-structure.mjs`.
- Entry counts per section do not need to match exactly, but headings must always be in sync.
- The structure check runs automatically via `npm run validate` and in CI on every push/PR.

## Link Check Policy

Broken links are checked monthly via [lychee](https://github.com/lycheeverse/lychee) in CI (`link-check` workflow). This check is **advisory only** -- it does not block PRs.

When broken links are found:

1. Maintainers review the report artifact uploaded to the workflow run.
2. Permanently dead links are replaced or removed in a follow-up PR.
3. Temporarily unavailable links (429, 503) are monitored across runs before action.

## Rate Limit Handling

Some hosts aggressively rate-limit or block automated requests. The link checker pre-excludes these domains:

- `shields.io` / `img.shields.io` (badge CDN returns 403 to CI)
- `arxiv.org` (rate-limits aggressively)
- `doi.org`, `scholar.google.com`, `ieeexplore.ieee.org`, `openreview.net`

If you add links from a new rate-limited domain, add it to the `LYCHEE_EXCLUDE` pattern in `.github/workflows/link-check.yml`.

## Discussion

- If you want to add a new subcategory, please open an Issue first.
- Maintainers may request extra details before merging.
