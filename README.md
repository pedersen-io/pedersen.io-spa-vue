# pedersen-io-spa-vue

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

----------

1. `helm create pedersen-spa-vue`
2. Rename folder to `.helm`
3. `helm upgrade pedersen-spa .helm`
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