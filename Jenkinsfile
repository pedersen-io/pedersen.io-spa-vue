pipeline {
    agent {
        label 'build-jenkins-node'
    }
    environment {
        NODE_OPTIONS = '--max_old_space_size=1024'
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
        stage('CI tests (no Playwright)') {
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