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

Note: `vibetube.art` deploys from matching `.art` folder paths (`workers/vibetube.art/`, `www/vibetube.art/`). DNS/routes are configured for `.art`.

## Deploy DX (Multi-Account Cloudflare)

- Prefer repo-root `deploy-all.sh` for production batch deploys.
- The script should source root `.env` (`set -a; source ".env"; set +a`) before looping into `workers/<domain>/`.
- This ensures `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` remain available after `cd`, preventing Wrangler from prompting for account selection on each domain deploy.

## Media Ingestion Rule

Workers only serve assets from each domain's own `www/<domain>/` directory. Media staged in `www/src/` must be copied into per-domain media folders before use (for example `www/nytimez.art/media/`, `www/vibetube.art/media/`).

## Documentation Rules

1. Track material work under `docs/release/[version]/[category]/[slug]/`
2. Use date fallback IDs when no ticket exists
3. Update process docs during execution
4. Reconcile documented intent with implemented behavior before handoff

## Realism Pass Guidance (v2+)

1. Match front-end rhythm first (masthead, nav, hierarchy, feed/cards)
2. Match interaction affordances second (search shells, metadata, article/watch layouts)
3. If source sites block fetch, use known conventions and document assumptions

## testyourvibes.com — Gamified Quiz (v0.4, Feb 2026)

`www/testyourvibes.com/index-v2.html` is the primary interactive deliverable. Key patterns:

- **Live SVG gauge** — `stroke-dashoffset` on a circle arc; updated on every slider input via `liveUpdate()`. Circumference = `2π × 38 = 238.76`. Gradient stops updated via JS on reveal.
- **Custom range sliders** — cross-browser (`-webkit-slider-thumb`, `-moz-range-thumb`); `--pct` CSS custom property drives two-tone gradient fill track.
- **Pick-row preset buttons** — dispatch `input` events onto the range input; `.is-active` class tracks state.
- **Tier system** — ICON ≥ 0.81, TRENDING ≥ 0.61, CHAOTIC ≥ 0.26, CRITICAL < 0.26. Each tier carries `color`, `glow` (rgba, browser-safe), `bg`, `badge`, `verdict`.
- **easeOutExpo count-up** — `requestAnimationFrame` loop with `1 - Math.pow(2, -10 * t)`.
- **Confetti** — fixed-position overlay; CSS custom properties `--tx`, `--ty`, `--r`, `--c`, `--d` on `<span>` elements; ICON tier only.
- **Spam-site elements** — scrolling news ticker (JS-duplicated segment for seamless CSS loop), live user count drift, mid-form ad, countdown timer, sticky footer bar, pop-up modal (4.5s delay), social proof toasts (9-13s cadence). **All interactive overlays (toast container, sticky bar, modal, exit-intent bar, chat widget/popup) must appear in the HTML BEFORE the main `<script>` block** — they are referenced synchronously on script execution.
- **Dark patterns** — Modal has 3-second delayed close (countdown timer `✕ 3 → ✕ 2 → ✕ 1 → reveal X`), pre-checked newsletter opt-in, confirm-shaming on skip via `window.confirm()`. Exit-intent bar (`mouseleave` when `e.clientY < 5`) slides in from top. Floating chat widget (bottom-right, bouncing).
- **Gauge label** — transitions from pulsing "live" → static "✓ locked" on submit; restored to "live" on retry/chaos spin.
- **Panel visual prominence** — `.panel` has a breathing box-shadow animation (`panel-breathe`, 4s). All ad elements (cards, bars, mid-form) are transparent with no box-shadow so the panel dominates visually.
- **Ecosystem credibility** — Hero sub-copy, a full-width "proof strip" of pill links, and a "🔬 Wait, is this actually real?" card grid all cross-link to all five other network sites with `data-vibe-domain` attributes for local/prod resolver compatibility.
- **Rec-card ad grid** — 2×2 Taboola-style "You May Also Like" grid replaces the old media showcase below the result card. Uses existing media assets.

## Quality Bar Before PR

- Route-to-file parity is correct for all workers
- No broken local links or broken local media references
- All HTML files include doctype, inline style, inline script
- Interactive overlay HTML elements (modal, sticky bar, toast container, exit-intent bar, chat widget) must appear before inline `<script>` tags that reference them
- Responsive safety: all new grid components (hiw-grid, rec-ad-items, proof-strip) have ≤ 680px overrides
- Core docs (`README.md`, `AGENTS.md`) are current


## Canonical Media + Video Policy

- Keep `www/src/` as staging only; production references should not rely on large editorial binaries in domain-local media folders.
- Core/full editorial hero video must use the canonical external URL: `https://edge.vibetube.art/src/TASK2_vibes-news.mp4`.
- “Videos within video” clips in `www/src/video/` are approved as standalone news assets and can be published as flat clip pages (especially in `vibetube` v2).
- Video behavior rule: `<video controls playsinline preload="metadata">` by default.
- Do not set `muted` by default. Do not use autoplay unless explicitly requested for a page.
- Exception path (only when explicitly requested): ad-only video units may use autoplay + loop with no controls to intentionally create an intrusive tabloid experience.
- Prefer core video for primary article/watch hero context; use other clips as secondary or related coverage.
- Never use the full/editorial `TASK2_vibes-news.mp4` in autoplay units.
