#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

if [ -n "${NODE_OPTIONS:-}" ]; then
	export NODE_OPTIONS="${NODE_OPTIONS} --max-old-space-size=${BUILD_MAX_OLD_SPACE_SIZE:-1408}"
else
	export NODE_OPTIONS="--max-old-space-size=${BUILD_MAX_OLD_SPACE_SIZE:-1408}"
fi

npm run build
