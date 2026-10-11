#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

export npm_config_audit=false
export npm_config_fund=false
export npm_config_progress=false
export npm_config_maxsockets="${NPM_CONFIG_MAXSOCKETS:-1}"

npm ci --legacy-peer-deps --no-audit --no-fund --prefer-offline --progress=false
