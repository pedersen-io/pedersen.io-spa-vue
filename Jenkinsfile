pipeline {
    agent {
        label 'build-jenkins-node'
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
                    sh './scripts/ci/install-deps.sh'
                }
            }
        }
        stage('Unit tests') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh './scripts/ci/test.sh'
                }
            }
        }
        stage('Build') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh './scripts/ci/build.sh'
                }
            }
        }
    }
}