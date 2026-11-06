pipeline {
    agent {
        label 'build-jenkins-node'
    }
    environment {
        BUILD_MAX_OLD_SPACE_SIZE = '1024'
        TEST_MAX_OLD_SPACE_SIZE = '768'
        NPM_CONFIG_MAXSOCKETS = '1'
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = '1'
        CYPRESS_INSTALL_BINARY = '0'
    }
    options {
        skipDefaultCheckout true
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
        stage('Checkout') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    checkout scm
                }
            }
        }
        stage('Install dependencies') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh './.scripts/ci/install-deps.sh'
                }
            }
        }
        stage('CI tests (no Playwright)') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh './.scripts/ci/test.sh'
                }
            }
        }
        stage('Build') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh './.scripts/ci/build.sh'
                }
            }
        }
    }
}