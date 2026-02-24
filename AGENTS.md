# AGENTS.md

## Mission

Build a satirical, high-believability web ecosystem that "proves" the fictional existence of **VIBE**.

`VIBE` = **V**ibrations + **I**ntimacy + **B**ureaucracy + **E**ntropy

## Tone

- Deadpan, playful, and plausibly scientific
- Confident presentation with absurd implications
- Fabricated claims, rigorous execution

## Canonical Domains

1. `arxivz.org` (mimic: arXiv)
2. `nytimez.art` (mimic: NYTimes)
3. `testyourvibes.com` (utility/testing layer)
4. `vibe-con.org` (conference layer)
5. `vibe-standards.org` (standards layer)
6. `vibetube.art` (mimic: YouTube)

## Technical Contract (Non-Negotiable)

1. Every site ships as plain HTML.
2. Every site has:
   - `index.html`
   - flat subpages (`*.html`)
3. CSS/JS stay page-local:
   - inline `<style>`
   - inline `<script>` near end of `<body>`
4. One Cloudflare Worker config per domain.
5. All domains are managed inside this single monorepo.

## Delivery Paths

- Site files: `www/<domain>/`
- Worker files: `workers/<domain>/`
- Docs and audit trail: `docs/`

Note: `vibetube.art` currently deploys from `workers/vibetube.com/` and `www/vibetube.com/` path names for continuity. DNS/routes are configured for `.art`.

## Documentation Rules

1. Material work must be tracked under `docs/release/[version]/[category]/[slug]/`.
2. Use date fallback IDs when no ticket ID exists.
3. Keep process docs updated during execution.
4. Reconcile documented intent with implemented behavior before handoff.

## Realism Pass Guidance (v2+)

1. Mimic front-end rhythm first:
   - masthead/header
   - nav/utility bars
   - hierarchy and content rails
   - card/feed structure
2. Mimic interaction affordances second:
   - search shells
   - metadata placement
   - article/watch layouts
3. If source sites block fetch (e.g., 403), use well-known front-end conventions and document assumptions.

## Placeholder Media Policy

1. Include explicit placeholders for image/video/chart modules.
2. Label placeholders clearly for deterministic later swaps.
3. Keep placeholders styled in-page (no external dependency required).

## Quality Bar Before PR

- Route-to-file parity is correct for all workers.
- No broken local links.
- All HTML files include doctype, inline style, and inline script.
- Core docs (`README.md`, `AGENTS.md`) are current.
