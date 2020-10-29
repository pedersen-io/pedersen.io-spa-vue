pipeline {
    agent {
        label 'build-node-stable'
    }
    stages {
        stage('Checkout') {
            steps{
                dir('/root/workspace/pedersen.io-spa-vue') {
                    checkout scm
                }
            }
        }
        stage('Dependencies') {
            steps{
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'yarn install'
                }
            }
        }
        stage('Build') {
            steps{
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'yarn build'
                }
            }
        }
        stage('Docker') {
            steps {
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'yarn docker:build'
                }
            }
        }
        stage('Publish') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/pedersen.io-spa-vue') {
                        sh 'yarn docker:tag'
                        sh 'yarn docker:publish'
                    }
                }
            }
        }
        stage('Deploy') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
                    dir('/root/workspace/pedersen.io-spa-vue') {
                        sh 'yarn deploy'
                    }
                }
            }
        }
    }
}