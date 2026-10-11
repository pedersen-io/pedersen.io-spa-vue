#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
CHART_FILE="${ROOT_DIR}/.helm/Chart.yaml"

if [ ! -f "$CHART_FILE" ]; then
  echo "Missing Helm chart at ${CHART_FILE}" >&2
  exit 1
fi

VERSION="$(date '+%Y.%m%d.%H%M')"
APP_VERSION="$(git -C "$ROOT_DIR" rev-parse HEAD)"

sed -i.bak -E "s/^version:.*$/version: ${VERSION}/" "$CHART_FILE"
sed -i.bak -E "s/^appVersion:.*$/appVersion: ${APP_VERSION}/" "$CHART_FILE"
rm -f "${CHART_FILE}.bak"

echo "Updated Helm chart version to ${VERSION} and appVersion to ${APP_VERSION}"
