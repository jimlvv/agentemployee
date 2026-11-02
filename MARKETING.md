# SoloPilot SEO content playbook

This file is the brief for the scheduled SEO task. It writes one article per run into
`content/blog/` and opens a pull request. Jim reviews, merges and deploys manually.

## Goal

Rank for searches made by people who are about to start (or are stuck on) a solo product,
and route them to SoloPilot's Validate stage. Target reader: indie hackers, solo founders,
developers with a side-project idea, wanting their first paying customer.

## Keyword clusters (pick from the backlog, keep it balanced)

1. **Idea validation** (core — closest to the product): how to validate a startup idea,
   validate a SaaS idea, idea validation checklist, how to know if a business idea is good,
   market research for a startup on a budget, customer interview questions.
2. **Finding a problem / niche**: how to find a SaaS idea, niche ideas for solo founders,
   finding problems people pay to solve.
3. **Building fast as a solo dev**: build an MVP alone, MVP with AI coding agents,
   what to include in an MVP, how long an MVP should take.
4. **First customers / first sale**: get first SaaS customers, pricing a SaaS product,
   pre-selling before building, cold outreach for founders.
5. **Solo founder operations**: AI agents for solo founders, automating a one-person business.

### Backlog (top = next). Move items to "Published" when merged.

- validate a SaaS idea (with a worked example)
- customer interview questions for startup ideas (Mom Test–style, with bad vs good examples)
- how to find a SaaS idea people will pay for
- pre-selling: how to get paid before you build
- how to price your first SaaS product
- how to get your first 10 SaaS customers as a solo founder
- MVP checklist: what to cut when you build alone
- using AI coding agents to build an MVP: what works and what doesn't
- idea validation checklist (printable)
- signs your startup idea is bad (and what to do instead)

### Published

- how to validate a startup idea → `how-to-validate-a-startup-idea-before-writing-code`

## Article format

- File: `content/blog/<slug>.md`, slug = keyword-rich, lowercase, hyphenated, ≤ 8 words.
- Frontmatter (required): `title`, `description` (140–160 chars, contains the keyword),
  `date` (YYYY-MM-DD, publish date), `keyword`, `tags` (2–4), `faq` (3–5 q/a pairs answering
  real "People also ask" style questions). Optional: `updated`, `draft: true`.
- Title: contains the primary keyword near the front, ≤ 65 chars when possible.
- Length: 1,200–2,000 words. Depth beats length.
- Structure: short hook (2–3 paragraphs naming the pain) → H2 sections that each answer one
  sub-question → a concrete example, table or checklist → a short "Where SoloPilot fits"
  section at the end (2–3 sentences, honest, never the bulk of the article).
- First 100 words must include the primary keyword naturally.
- Link to at least one existing post in `content/blog/` when relevant (`/blog/<slug>`).
- Link to 1–3 credible external sources when citing a fact.

## Voice

Jim: a backend engineer turned solo founder, writing to peers. Direct, practical, a bit
opinionated. First person is fine. Short paragraphs. Concrete examples over adjectives.
No hype words (game-changer, revolutionary, unlock, supercharge), no filler intros
("In today's fast-paced world…"), no emoji.

## Honesty rules (never break)

- Never invent statistics, studies, quotes, customers, revenue, signups or results.
- Every factual claim with a number needs a real source you read this run, linked inline.
  If you can't source it, rewrite it as an opinion or drop it.
- Never claim SoloPilot features that aren't described here: SoloPilot's Validate stage helps
  turn an idea into a five-part hypothesis (segment, problem, alternative, reason,
  willingness to pay) with user-set kill conditions, gathers evidence from market signals and
  returns a verdict. Build, Sale and Support stages are in progress — say "coming" if
  mentioned at all.
- Don't copy competitor articles. Read the top results to find the gap, then write
  something more useful.
