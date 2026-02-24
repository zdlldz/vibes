   #!/usr/bin/env bash
   set -euo pipefail
   set -a
   source ".env"
   set +a

   for d in arxivz.org nytimez.art testyourvibes.com vibe-con.org vibe-standards.org vibetube.art; do
     echo "Deploying $d"
     (cd "workers/$d" && wrangler deploy) || exit 1
   done