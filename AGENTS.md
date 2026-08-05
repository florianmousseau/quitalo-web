# AGENTS.md

The rules for this repo live in [CLAUDE.md](CLAUDE.md). They are not
Claude-specific: the content rules, the airtight boundary with the app and the
commit conventions apply to any agent working here. Read that file first.

Three things it does not say, and that this repo punishes silently:

- **`main` is the only long branch**, and this repo is **public**. Work goes
  through a branch and a pull request, and an agent never merges it: a public
  history is read by strangers and a commit there is final. Prepare, then leave
  the merge to Florian.
- **Branch and PR names carry no tool prefix** - not `claude/`, not `agent/`,
  not `codex/`. A merge commit carries the branch name into the history for
  good. Commits are conventional, English, pure ASCII, authored by
  Florian Mousseau <florian.mousseau@gmail.com>, with **no AI mention anywhere**:
  no co-author line, no trailer, no branding in a commit or a PR body.
  `gh pr create` sometimes adds a generated-by trailer - re-read the body and
  remove it.
- **The main domain is `quitalo.fr`**, and has been since 2026-07-28. The `.co`
  addresses only redirect. Never write a `.co` URL in copy, in a canonical, in a
  sitemap or in a test target - and check that no canonical points at a
  redirection, which has already cost a correction here.

One line that is decided and is not to be "fixed": this site has **no tracking,
no cookies and no analytics script**. The legal page promises it; keep it true.
A page-view figure is not worth breaking a published promise, and the server-side
count in the Cloudflare Pages project answers the same question without a single
byte of JavaScript.
