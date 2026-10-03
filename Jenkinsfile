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
                    sh 'npm ci --legacy-peer-deps'
                }
            }
        }
        stage('Unit tests') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'npm run test:unit -- --watch=false'
                }
            }
        }
        stage('Build') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'npm run build'
                }
            }
        }
    }
}