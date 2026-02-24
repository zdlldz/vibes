# AGENTS.md

## Mission

Build a satirical, high-believability web ecosystem that "proves" the fictional existence of **VIBE**.

`VIBE` = **V**ibrations + **I**ntimacy + **B**ureaucracy + **E**ntropy

## Tone

- Deadpan, playful, and plausibly scientific
- Confident presentation with absurd implications
- Fabricated claims, rigorous execution

---

## Canonical VIBE Model

The VIBE index is formally defined and measured as follows. All sub-indices normalised to [0, 1]. Composite score is the geometric mean: `VIBE = (V × I × B × E)^(1/4)` — any component = 0 drives VIBE to 0 ("vibes were off"). Full analytical derivation uses the Gibbs-Boltzmann partition-function formulation; see the journal article for the complete expression.

### Sub-index directions
- **V, I, E:** higher = more vibe-positive
- **B:** operationalised as the **inverse regulatory burden coefficient** — B = 1 means no bureaucracy; B = 0 means total bureaucratic saturation

### Scale anchors
- "It's a vibe" = 1.0
- "Vibes were off" = 0.0
- "Bad vibes" = < 0 (anti-VIBE extension, in preparation)

### Instrument
The **VIBEMETER Mark II** — sixteen sensor channels across V, I, B, E sub-indices. Patent-pending **X-Factor Receptor™ (XFR)** contributes to V. **Ennui Quotient™ (EQ)** ("How bleh do you feel right now?", 1–5) contributes to E. Full spec: Bration (2024) [fake citation].

### Fake author team
All affiliated with the **Centre for Atmospheric and Social Energetics (CASE), University of Geneva**:
- Dr. Anita Goodvibe (lead)
- Prof. Cal I. Bration
- Dr. Ennui DuPont
- Prof. Rex Onance
- Dr. B.R. Ocratic
- *(user slot — to be added)*

### Publication venue
*Journal of Emergent Social Thermodynamics* (**JEST**). arXiv preprint: `arxivz:2502.VIBE01`.

### Key dataset facts
9 social contexts × 30 observations × 4 international sites (Geneva, London, Tokyo, São Paulo). Seed=42, reproducible. VIBE range 0.110–0.921; lowest = government waiting room (0.178); highest = rave, 3:00am (0.866).

---

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
- Content drafts (editorial source): `artifacts/`

Note: `vibetube.art` currently deploys from `workers/vibetube.com/` and `www/vibetube.com/` path names for continuity. DNS/routes are configured for `.art`.

---

## Completed Content Artifacts

Editorial source files (Markdown) that inform each site's content. All verified internally consistent across all numerical cross-references.

| Artifact | File | Target Site | Status |
|----------|------|-------------|--------|
| Journal article draft | `artifacts/vibe-article-draft.md` | arxivz.org | ✅ Complete |
| Synthetic dataset (n=270) | `artifacts/vibe-dataset.csv` | arxivz.org / testyourvibes.com | ✅ Complete |
| NYT-style news article + media brief | `artifacts/nytimez-article-draft.md` | nytimez.art | ✅ Complete |
| IOVS standards body website | `artifacts/vibe-standards-site-draft.md` | vibe-standards.org | ✅ Complete |
| Process document | `artifacts/process/journal-article-process.md` | — | ✅ Complete |
| Article plan / section beats | `artifacts/process/journal-article-plan.md` | — | ✅ Complete |

**Cross-site wiring (seeded in existing drafts):**
- `nytimez-article-draft.md` → links to `arxivz.org/abs/2502.VIBE01` and `testyourvibes.com`
- `vibe-standards-site-draft.md` → references `testyourvibes.com` (consumer estimator)
- `vibe-article-draft.md` → seeds VIBE-CON I (Geneva, 2019) as precursor to `vibe-con.org`

---

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
