#!/usr/bin/env bash
# Déploie le site sur Cloudflare Pages en excluant les fichiers listés dans .assetsignore.
# `wrangler pages deploy .` ignore .assetsignore : on publie donc un dossier filtré.
set -euo pipefail
cd "$(dirname "$0")"
OUT="$(mktemp -d)"
trap 'rm -rf "$OUT"' EXIT
rsync -a --exclude='.*' --exclude='node_modules' --exclude='README.md' --exclude='deploy.sh' \
  --exclude-from=<(grep -v '^#' .assetsignore | grep -v '^$') ./ "$OUT/"
wrangler pages deploy "$OUT" --project-name=climbing-addicts --branch=main \
  --commit-hash="$(git rev-parse HEAD)" --commit-message="$(git log -1 --format=%s)"
