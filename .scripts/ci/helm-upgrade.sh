#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$ROOT_DIR"

: "${DIGITALOCEAN_ACCESS_TOKEN:?Please set DIGITALOCEAN_ACCESS_TOKEN}"
: "${DIGITALOCEAN_K8S_CLUSTER:?Please set DIGITALOCEAN_K8S_CLUSTER}"
: "${DOCKER_IMAGE:?Please set DOCKER_IMAGE}"
: "${IMAGE_TAG:?Please set IMAGE_TAG}"

K8S_NAMESPACE="${K8S_NAMESPACE:-default}"
HELM_RELEASE="${HELM_RELEASE:-pedersen-spa}"

doctl auth init --access-token "$DIGITALOCEAN_ACCESS_TOKEN"
doctl kubernetes cluster kubeconfig save "$DIGITALOCEAN_K8S_CLUSTER"
kubectl cluster-info

npm run set-version

helm upgrade --install "$HELM_RELEASE" .helm \
  --namespace "$K8S_NAMESPACE" \
  --set image.repository="$DOCKER_IMAGE" \
  --set image.tag="$IMAGE_TAG" \
  --set image.pullPolicy=Always \
  --wait --timeout 10m
