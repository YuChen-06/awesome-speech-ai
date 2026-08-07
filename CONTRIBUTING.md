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
- Treat X/Twitter, blogs, news, and community posts as discovery leads only; final entries need an official long-lived source plus a second official or near-official source.

## Scope and Eligibility

- Add public open-source projects, models, datasets, papers, and reusable tools that materially serve Speech AI.
- A project may offer commercial hosting or support, but its qualifying core must have a verifiable official public source repository or other durable technical source with clear license or access information.
- Do not submit a commercial-only landing page, directory, affiliate page, or product advertisement as an open-source project.
- Use one canonical project URL. Prefer the upstream repository; use official documentation, model cards, dataset pages, or papers as supporting evidence.
- Do not invent GitHub star badges. Add a star badge only when the canonical URL is a GitHub repository; omit it for websites, papers, and non-GitHub model or dataset pages.
- Do not add an entry only because it is popular or newly announced. Explain its incremental value and why its category is the best fit.

## Local Validation

Before opening a PR, run:

```bash
npm ci
npm run validate
```

`npm ci` is preferred because it follows the committed lockfile. Use `npm install` only when intentionally refreshing dependencies.

If your local shell wrapper around `npm` is unstable, run the same checks directly through Node:

```bash
node scripts/validate-maintenance.mjs
```

This repository validates:

- awesome-list formatting via `awesome-lint`
- README / README.zh structural isomorphism, including curated-entry URL order
- duplicate README entries across sections
- public-boundary validation for tracked or staged private maintenance paths

If validation fails:

- Leave the relevant validation checkbox unchecked.
- Include the exact failing command, first actionable error, and the base commit in the PR description.
- Separate a pre-existing baseline failure from a failure introduced by the PR; do not label a failed run as passed.
- Do not weaken or bypass a gate to make a README-only change appear green.

## Local Hooks

Git hooks are optional maintainer-local tooling and are not installed by `npm ci` or `npm install`. Contributors should rely on `npm run validate` and must not commit generated `.husky/` files.

## Repository Hygiene

Track only the canonical repository assets:

- `README.md` and `README.zh.md`
- contributor and rules documents
- lightweight maintenance assets such as `.github/` and `scripts/`
- minimal package and lint configuration required to run validation

Do not add local-only state or generated artifacts such as:

- local agent workspace files
- `.husky/` locally generated hook files
- dependency directories and caches
- logs, temporary files, or downloaded intermediate data
- one-off personal notes or ad-hoc script output

## Where to submit

- Submit a Pull Request that updates `README.md`.
- If the entry belongs in both language versions, update `README.md` and `README.zh.md` in the same PR.
- Maintainers will review evidence, scope, duplication, category fit, bilingual alignment, and validation output; they may request details, defer, or reject an entry.

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
5. Run `npm run validate` to confirm bilingual headings and curated-entry URL order pass.

## Bilingual Sync Requirements

This repository maintains parallel English (`README.md`) and Chinese (`README.zh.md`) versions. CI enforces **structural isomorphism**: every heading in `README.md` must have a corresponding heading in `README.zh.md` at the same position and nesting level.

Rules:

- When you add, remove, or reorder a section in one file, do the same in the other.
- New Chinese headings must be registered in the `zhToCanonical` map in `scripts/check-readme-structure.mjs`.
- Curated entries with `- [title](URL)` must keep normalized URL order aligned across both files; headings and entry counts must stay in sync.
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
