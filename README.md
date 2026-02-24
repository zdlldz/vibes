# VIBE Network (Day 02)

Satirical art + science project: build convincing, polished "evidence" for a fictional measurable phenomenon called **VIBE**.

## What This Repo Contains

A six-site fake web ecosystem, all maintained in one monorepo:

1. `arxivz.org` (mimics arXiv)
2. `nytimez.art` (mimics NYTimes)
3. `testyourvibes.com` (utility/testing layer)
4. `vibe-con.org` (conference layer)
5. `vibe-standards.org` (standards layer)
6. `vibetube.art` (mimics YouTube)

Each domain is static-first and independently deployable.

## Core Concept

`VIBE` = **V**ibrations + **I**ntimacy + **B**ureaucracy + **E**ntropy

The point is not fantasy art, but plausible fabricated evidence rendered with high presentational rigor.

## Repository Layout

```text
.
├── AGENTS.md
├── SPEC.md
├── README.md
├── TODO_assets.md
├── www/
│   ├── arxivz.org/
│   ├── nytimez.art/
│   ├── src/                 # shared media staging drop
│   ├── testyourvibes.com/
│   ├── vibe-con.org/
│   ├── vibe-standards.org/
│   └── vibetube.art/
├── workers/
│   ├── arxivz.org/
│   ├── nytimez.art/
│   ├── testyourvibes.com/
│   ├── vibe-con.org/
│   ├── vibe-standards.org/
│   └── vibetube.art/
└── docs/
    ├── knowledge/
    ├── release/
    └── templates/
```

## Technical Contract

- Every site is plain HTML.
- Every site uses `index.html` + flat subpages.
- Every page keeps CSS and JS inline.
- Every domain has one Cloudflare Worker config.
- No framework runtime is required to render pages.

### Media Routing Note

Workers only serve files from each domain's own `www/<domain>/` directory. If new media is dropped into `www/src/`, copy selected files into per-domain folders (for example `www/nytimez.art/media/` and `www/vibetube.art/media/`) before referencing them in HTML.


### Canonical Media and Video Policy

- Source staging remains `www/src/` (`video/` + `images/` trees).
- Before referencing assets in HTML, copy them into the target domain folder: `www/<domain>/media/`.
- Canonical full/editorial hero video URL (external only): `https://edge.vibetube.art/src/TASK2_vibes-news.mp4`.
- Additional source clips are valid as reusable “news pieces” and may have dedicated flat watch pages (for example under `www/vibetube.art/`).
- Video embed contract for this project: use `controls` + `playsinline`, do not use `autoplay`, and do **not** use `muted` by default.
- Exception path (only when explicitly requested): ad-only video units may use autoplay + loop with no controls.
- Hard rule: never use the full/editorial `TASK2_vibes-news.mp4` file in autoplay contexts; use smaller clips for autoplay units.

### Domain Path Note

`vibetube.art` now uses matching folder paths:

- `www/vibetube.art/`
- `workers/vibetube.art/`

Routes remain configured for `vibetube.art`.

## Prerequisites

- `node` + `npm` (for Wrangler CLI)
- Cloudflare account with access to target zones

Install Wrangler globally if needed:

```bash
npm install -g wrangler
```

## Cloudflare Commands (Preview + Deploy)

### 1) Authenticate once

```bash
wrangler login
wrangler whoami
```

### 2) Local preview (per domain)

From repo root:

```bash
cd "workers/arxivz.org" && wrangler dev
```

Repeat for any domain:

```bash
cd "workers/nytimez.art" && wrangler dev
cd "workers/testyourvibes.com" && wrangler dev
cd "workers/vibe-con.org" && wrangler dev
cd "workers/vibe-standards.org" && wrangler dev
cd "workers/vibetube.art" && wrangler dev
```

### 3) Deploy (per domain)

Routes are already configured in each `workers/<domain>/wrangler.toml`.

Confirm your Cloudflare auth context first:

```bash
wrangler whoami
```

Note: with Wrangler `4.58.0` in this repo, `wrangler deploy` does **not** accept `--account-id`.

Deploy each site:

```bash
cd "workers/arxivz.org" && wrangler deploy
cd "workers/nytimez.art" && wrangler deploy
cd "workers/testyourvibes.com" && wrangler deploy
cd "workers/vibe-con.org" && wrangler deploy
cd "workers/vibe-standards.org" && wrangler deploy
cd "workers/vibetube.art" && wrangler deploy
```

### 4) Verify deployed workers

```bash
cd "workers/arxivz.org" && wrangler deployments list
cd "workers/nytimez.art" && wrangler deployments list
cd "workers/testyourvibes.com" && wrangler deployments list
cd "workers/vibe-con.org" && wrangler deployments list
cd "workers/vibe-standards.org" && wrangler deployments list
cd "workers/vibetube.art" && wrangler deployments list
```

### 5) Optional batch deploy helper

Use the repo-root helper script:

```bash
chmod +x deploy-all.sh
./deploy-all.sh
```

`deploy-all.sh` sources root `.env` before entering `workers/<domain>/` so Wrangler keeps a consistent account context for every deploy in a multi-account setup.

Expected root `.env` keys:

```bash
CLOUDFLARE_ACCOUNT_ID=...
CLOUDFLARE_API_TOKEN=...
```

If you deploy from per-domain folders directly, Wrangler may not load root `.env` automatically and can prompt for account selection per deploy.

## Optional Fast Integrity Checks

### Check changed files

```bash
git status --short
```

### Check all site pages exist

```bash
python3 - <<'PY'
from pathlib import Path
root = Path("www")
for site in sorted(root.iterdir()):
    if site.is_dir():
        pages = sorted(p.name for p in site.glob("*.html"))
        print(site.name, "->", pages)
PY
```

### Check worker route targets exist

```bash
python3 - <<'PY'
from pathlib import Path
import re
www = Path("www")
for wf in Path("workers").glob("*/*worker.js"):
    txt = wf.read_text()
    for p in re.findall(r'new URL\\(\"(/[^\\\"]+\\.html)\"', txt):
        target = www / wf.parent.name / p.lstrip("/")
        print("OK" if target.exists() else "MISSING", wf.parent.name, p)
PY
```

## Docs Workflow

This repo uses the docs system under `docs/`.

Scaffold a release:

```bash
cp -r docs/templates/release-bundle docs/release/[version]
```

Scaffold a task bundle:

```bash
mkdir -p docs/release/[version]/[category]/[slug]
cp docs/templates/task-bundle/*.md docs/release/[version]/[category]/[slug]/
```

Current primary task trail:

- `docs/release/v0.1/add/20260224-add-vibe-monorepo-discovery/`

## Current Status

- Six domains scaffolded and styled.
- V2 realism pass completed (desktop-first mimic quality).
- Basic responsive safety pass completed.
- Real article content integrated across `arxivz.org`, `nytimez.art`, and `vibe-standards.org`.
- Randomized staged media integrated into `nytimez.art`, `vibetube.art`, `vibe-con.org`, and `arxivz.org` from `www/src` via per-domain `media/` folders.
- All domain routes are configured in wrangler for live DNS zones.

## Next Priority

1. Expand clip watch pages for additional source videos in `vibetube` v2.
2. Run local worker smoke checks before/after each deploy.
3. QA typography, poster frames, and mobile crop behavior for each embedded media block.
