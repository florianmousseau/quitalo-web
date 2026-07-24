# CLAUDE.md

Guidance for AI agents working in this repo.

## What this is

The marketing site for Quitalo (quitalo.co): a static Astro site presenting
the app served at app.quitalo.co. No app code here; the application lives in
the `quitalo` repository. Keep the two airtight in code and commits; the site
may of course link to the app.

## Content rules

- French-first: the audience is the French private landlord. Correct French
  typography (accents, apostrophes) in all copy.
- Legal claims cite their source in the copy itself (law article) and must
  match what the app actually does; when in doubt, check the app repository's
  domain code.
- The canonical one-line definition of Quitalo lives in `src/consts.ts`
  (DEFINITION) and is reused verbatim everywhere (pages, llms.txt, metadata).
  Change it in one place or not at all.
- No tracking, no cookies, no analytics scripts. The mentions-legales page
  promises it; keep it true.

## Quality gate

```sh
npm run gate
```

`gate` = `format:check` + `lint` + `check` + `knip` + `dup`. No tests: this
site has no logic to test; if logic appears, add vitest and a coverage
ratchet with it.

- No dead code (knip), no copy-paste (jscpd), zero eslint warnings.
- Formatting belongs to prettier.
- No secrets in the repo, ever (gitleaks in CI).
- When the gate is red: fix the cause, never weaken a rule.

## Git

- Branches: `feature/*` merged into `main` via squash PRs. `main` deploys to
  production (Cloudflare Pages, automatic).
- Conventional commits, English, pure ASCII. Author is always
  Florian Mousseau <florian.mousseau@gmail.com>; no AI mention, no co-author
  trailer, no tool branding anywhere (commits, branches, PRs).
