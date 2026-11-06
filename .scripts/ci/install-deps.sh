#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

export npm_config_audit=false
export npm_config_fund=false
export npm_config_progress=false
export npm_config_maxsockets="${NPM_CONFIG_MAXSOCKETS:-1}"
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD="${PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD:-1}"
export CYPRESS_INSTALL_BINARY="${CYPRESS_INSTALL_BINARY:-0}"

npm ci --legacy-peer-deps --no-audit --no-fund --prefer-offline --progress=false
