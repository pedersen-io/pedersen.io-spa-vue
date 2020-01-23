# pedersen.io-spa-vue

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

----------

1. `helm create dp-spa-vue`
2. Rename folder to `.helm`
3. `helm install dp-spa-vue-test .helm`
    ```yaml
    Release "dp-spa-vue-test" has been upgraded. Happy Helming!
    NAME: dp-spa-vue-test
    LAST DEPLOYED: Sat Jan  4 11:43:44 2020
    NAMESPACE: default
    STATUS: deployed
    REVISION: 5
    NOTES:
    1. Get the application URL by running these commands:
    export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=dp-spa-vue,app.kubernetes.io/instance=dp-spa-vue-test" -o jsonpath="{.items[0].metadata.name}")
    echo "Visit http://127.0.0.1:8080 to use your application"
    kubectl --namespace default port-forward $POD_NAME 8080:80
    ```