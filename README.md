# pedersen-io-spa-vue

## Agent guidance

- Repository agent contract: `AGENTS.md`
- Copilot pointer file: `.github/copilot-instructions.md`

## Prerequisites

- Node.js `>=18 <26` (Node 20 LTS recommended)
- npm `>=8`

If you use `nvm`, run:

```
nvm use
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run Playwright tests locally

```
npm run test:playwright:local
```

CI note: Jenkins runs `npm run test:ci` with `--runInBand` on constrained build nodes; Playwright is local-only.

CI build note: Jenkins uses `.scripts/ci/build.sh`, which caps Node's old-space size for the production build so the webpack step is less likely to exhaust memory on the small build node. You can override the cap with `BUILD_MAX_OLD_SPACE_SIZE` if the node has more headroom.

CI install note: Jenkins uses `.scripts/ci/install-deps.sh`, which keeps npm's networking and logging overhead low for the small build node and skips browser binary downloads that are not needed for this unit-test/build pipeline.

### Constrained-node CI profile (1 vCPU / 2 GB)

- `BUILD_MAX_OLD_SPACE_SIZE=1024`
- `TEST_MAX_OLD_SPACE_SIZE=768`
- `NPM_CONFIG_MAXSOCKETS=1`
- `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1`
- `CYPRESS_INSTALL_BINARY=0`

These defaults are set in `Jenkinsfile` for the build job and can be overridden per environment if needed.

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Asset conventions

- Keep `public/` minimal. It should only contain files that must be copied as-is at build time.
- In this project, `public/` is reserved for `index.html` and `favicon.ico`.
- Put application images/icons under `src/assets/` and import them from Vue components so webpack can fingerprint and manage them.

---

1. `helm create pedersen-spa-vue`
2. Rename folder to `.helm`
3. `helm upgrade --install pedersen-spa .helm`
   ```yaml
   Release "pedersen-spa-vue-test" has been upgraded. Happy Helming!
   NAME: pedersen-spa-vue-test
   LAST DEPLOYED: Sat Jan  4 11:43:44 2020
   NAMESPACE: default
   STATUS: deployed
   REVISION: 5
   NOTES:
   1. Get the application URL by running these commands:
   export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=pedersen-spa-vue,app.kubernetes.io/instance=pedersen-spa-vue-test" -o jsonpath="{.items[0].metadata.name}")
   echo "Visit http://127.0.0.1:8080 to use your application"
   kubectl --namespace default port-forward $POD_NAME 8080:80
   ```
