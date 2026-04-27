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

## Discussion

- If you want to add a new subcategory, please open an Issue first.
- Maintainers may request extra details before merging.
