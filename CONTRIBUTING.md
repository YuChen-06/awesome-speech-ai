# Contributing

Thanks for contributing to Awesome Speech AI. This is a curated list, not an exhaustive directory.

## What to Add

- Public open-source projects, models, datasets, papers, and reusable tools that materially serve Speech AI.
- Every entry must be:
  - **Verifiable**: the link works and the project or paper exists.
  - **Unique**: no duplicate repo, paper, arXiv ID, or alias anywhere in the list.
  - **Well categorized**: it fits the README taxonomy, and you explain why it belongs in that section.
  - **Clearly licensed**: license or access terms are public.
- Use one canonical URL, preferably the upstream repository. Back it with a second official or near-official source, such as docs, a model card, a dataset page, or the paper.
- Blogs, news, X/Twitter, and community posts are discovery leads only. They do not count as sources.
- Popularity or a recent announcement alone is not enough. Explain what the entry adds.
- Do not submit commercial-only landing pages, directories, affiliate pages, or ads. A project with paid hosting is fine if its core is publicly available under a clear license.

## Entry Format

Tools and projects:

```markdown
- [Project Name](https://github.com/owner/repo) ![stars](https://img.shields.io/github/stars/owner/repo.svg?cacheSeconds=86400) - One-line description.
```

- Add the star badge only for GitHub repositories, and omit it for websites, papers, and non-GitHub model or dataset pages.
- Start the description with a capital letter and keep it short and concrete. Mark archived projects with `(archived)`.
- Keep a consistent order within a section.

Papers:

```markdown
- **Paper Title** (Year), Authors et al. [pdf](link) [code](optional)
```

## Bilingual Sync

`README.md` (English) and `README.zh.md` (Chinese) must stay structurally identical. CI checks this.

- Make every add, remove, or reorder in both files in the same PR.
- Keep curated `- [title](URL)` entries in the same order with the same URLs in both files.
- To add a section, open an Issue first. Then add the heading at the same position in both files, update both `Contents` tables if it is a `##` heading, and register the Chinese heading in `zhToCanonical` in `scripts/check-readme-structure.mjs`.

## Validate Before Opening a PR

```bash
npm ci
npm run validate   # or: node scripts/validate-maintenance.mjs
```

This runs `awesome-lint`, the bilingual structure check, the duplicate-entry check, and the public-boundary check.

If a check fails, leave its checkbox unchecked in the PR template. Paste the failing command, the first actionable error, and the base commit, and say whether the failure already exists on `main`. Never weaken a gate to make a PR look green.

## Repository Hygiene

Commit only the READMEs, the contributor and maintenance docs, `.github/`, `scripts/`, and the package and lint config. Do not commit dependency directories, caches, logs, temporary output, personal notes, local agent workspace files, or generated `.husky/` hooks. Git hooks are optional and not installed by npm.

## Link Checks

A monthly [lychee](https://github.com/lycheeverse/lychee) workflow (`link-check`) checks every link. It turns red on broken links but never blocks PRs. Maintainers replace or remove dead links from its report. A link that is only temporarily failing (429/503) is watched across runs first.

Hosts that block or rate-limit CI (shields.io, arXiv, DOI, Google Scholar, IEEE Xplore, OpenReview) are skipped. To skip a new host, add it to the `--exclude` regex in `.github/workflows/link-check.yml`. See [docs/maintenance.md](docs/maintenance.md) for details.

## Review

Maintainers review evidence, scope, duplication, category fit, bilingual alignment, and validation output. They may ask for details, defer an entry, or reject it.
