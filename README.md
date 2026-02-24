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
├── todo_assets.md
├── www/
│   ├── arxivz.org/
│   ├── nytimez.art/
│   ├── testyourvibes.com/
│   ├── vibe-con.org/
│   ├── vibe-standards.org/
│   └── vibetube.com/
├── workers/
│   ├── arxivz.org/
│   ├── nytimez.art/
│   ├── testyourvibes.com/
│   ├── vibe-con.org/
│   ├── vibe-standards.org/
│   └── vibetube.com/
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

### Domain Path Note

`vibetube.art` is currently deployed from the existing folder paths:

- `www/vibetube.com/`
- `workers/vibetube.com/`

Routes are configured for `vibetube.art`.

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
cd "workers/vibetube.com" && wrangler dev
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
cd "workers/vibetube.com" && wrangler deploy
```

### 4) Verify deployed workers

```bash
cd "workers/arxivz.org" && wrangler deployments list
cd "workers/nytimez.art" && wrangler deployments list
cd "workers/testyourvibes.com" && wrangler deployments list
cd "workers/vibe-con.org" && wrangler deployments list
cd "workers/vibe-standards.org" && wrangler deployments list
cd "workers/vibetube.com" && wrangler deployments list
```

### 5) Optional batch deploy helper

From repo root:

```bash
for d in arxivz.org nytimez.art testyourvibes.com vibe-con.org vibe-standards.org vibetube.com; do
  echo "Deploying $d"
  (cd "workers/$d" && wrangler deploy) || exit 1
done
```

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
- Media remains placeholder-only by design.
- All domain routes are configured in wrangler for live DNS zones.

## Next Priority

1. Replace placeholder content/media with richer fabricated artifacts.
2. Run local worker smoke checks before/after each deploy.
3. Replace placeholder media with final creative assets.
