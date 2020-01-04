# derekpedersen-spa-vue

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
2. `helm install stable/nginx-ingress --name nginx-ingress --set controller.publishService.enabled=true`
    ```yaml
    NAME: nginx-ingress
    LAST DEPLOYED: Sat Jan  4 07:31:50 2020
    NAMESPACE: default
    STATUS: deployed
    REVISION: 1
    TEST SUITE: None
    NOTES:
    The nginx-ingress controller has been installed.
    It may take a few minutes for the LoadBalancer IP to be available.
    You can watch the status by running 'kubectl --namespace default get services -o wide -w nginx-ingress-controller'

    An example Ingress that makes use of the controller:

    apiVersion: extensions/v1beta1
    kind: Ingress
    metadata:
        annotations:
        kubernetes.io/ingress.class: nginx
        name: example
        namespace: foo
    spec:
        rules:
        - host: www.example.com
            http:
            paths:
                - backend:
                    serviceName: exampleService
                    servicePort: 80
                path: /
        # This section is only required if TLS is to be enabled for the Ingress
        tls:
            - hosts:
                - www.example.com
            secretName: example-tls

    If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:

    apiVersion: v1
    kind: Secret
    metadata:
        name: example-tls
        namespace: foo
    data:
        tls.crt: <base64 encoded cert>
        tls.key: <base64 encoded key>
    type: kubernetes.io/tls
    ```
3. `helm install dp-spa-vue-test dp-spa-vue`
    ```yaml
    NAME: dp-spa-vue-test
    LAST DEPLOYED: Sat Jan  4 07:33:50 2020
    NAMESPACE: default
    STATUS: deployed
    REVISION: 1
    NOTES:
    1. Get the application URL by running these commands:
    http://pedersen.io/
    ```