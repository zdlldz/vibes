# AGENTS.md

## Mission

Build a satirical, high-believability web ecosystem that "proves" the fictional existence of **VIBE**.

`VIBE` = **V**ibrations + **I**ntimacy + **B**ureaucracy + **E**ntropy

## Tone

- Deadpan, playful, and plausibly scientific
- Confident presentation with absurd implications
- Fabricated claims, rigorous execution

## Canonical VIBE Model

The VIBE index is a composite score over four normalised sub-indices in `[0, 1]`:

`VIBE = (V × I × B × E)^(1/4)`

Any component approaching `0` drives the composite score toward `0` ("vibes were off").

### Sub-index directions

- `V`, `I`, `E`: higher is more vibe-positive
- `B`: inverse regulatory burden coefficient
  - `B = 1` means no bureaucracy
  - `B = 0` means total bureaucratic saturation

### Scale anchors

- "It's a vibe" = `1.0`
- "Vibes were off" = `0.0`
- "Bad vibes" = `< 0` (anti-VIBE extension in progress)

### Instrument + provenance

- VIBEMETER Mark II (16 channels) across V/I/B/E
- X-Factor Receptor™ (XFR) contributes to `V`
- Ennui Quotient™ (EQ, "How bleh do you feel right now?") contributes to `E`
- Preprint anchor: `arxivz:2502.VIBE01` (JEST universe)

### Dataset anchors

- `9` contexts × `30` observations = `270`
- Sites: Geneva, London, Tokyo, Sao Paulo
- Mean high: rave, 3:00am (`0.866`)
- Mean low: government waiting room (`0.178`)

## Canonical Domains

1. `arxivz.org` (mimic: arXiv)
2. `nytimez.art` (mimic: NYTimes)
3. `testyourvibes.com` (utility/testing layer)
4. `vibe-con.org` (conference layer)
5. `vibe-standards.org` (standards layer)
6. `vibetube.art` (mimic: YouTube)

## Technical Contract (Non-Negotiable)

1. Every site ships as plain HTML
2. Every site has:
   - `index.html`
   - flat subpages (`*.html`)
3. CSS/JS remain page-local:
   - inline `<style>`
   - inline `<script>` near end of `<body>`
4. One Cloudflare Worker config per domain
5. All domains are managed inside one monorepo

## Delivery Paths

- Site files: `www/<domain>/`
- Worker files: `workers/<domain>/`
- Docs + audit trail: `docs/`
- Editorial source drafts: `artifacts/`
- Shared media staging drop: `www/src/`

Note: `vibetube.art` deploys from `workers/vibetube.com/` and `www/vibetube.com/` path names for continuity. DNS/routes are configured for `.art`.

## Media Ingestion Rule

Workers only serve assets from each domain's own `www/<domain>/` directory. Media staged in `www/src/` must be copied into per-domain media folders before use (for example `www/nytimez.art/media/`, `www/vibetube.com/media/`).

## Documentation Rules

1. Track material work under `docs/release/[version]/[category]/[slug]/`
2. Use date fallback IDs when no ticket exists
3. Update process docs during execution
4. Reconcile documented intent with implemented behavior before handoff

## Realism Pass Guidance (v2+)

1. Match front-end rhythm first (masthead, nav, hierarchy, feed/cards)
2. Match interaction affordances second (search shells, metadata, article/watch layouts)
3. If source sites block fetch, use known conventions and document assumptions

## Quality Bar Before PR

- Route-to-file parity is correct for all workers
- No broken local links or broken local media references
- All HTML files include doctype, inline style, inline script
- Core docs (`README.md`, `AGENTS.md`) are current
