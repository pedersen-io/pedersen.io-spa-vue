# pedersen-io-spa-vue

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

CI note: Jenkins runs `npm run test:ci` (unit-only) on constrained build nodes; Playwright is local-only.

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
