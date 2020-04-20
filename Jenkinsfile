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
        stage('Test') {
            steps{
                dir('/root/workspace/pedersen.io-spa-vue') {
                    sh 'yarn test:unit'
                    sh 'yarn test:e2e'
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
        // stage('Deploy') {
        //     when {
        //         expression { env.BRANCH_NAME == 'master' }
        //     }
        //     steps {
        //         withCredentials([[$class: 'StringBinding', credentialsId: 'GCLOUD_PROJECT_ID', variable: 'GCLOUD_PROJECT_ID']]) {
        //             dir('/root/workspace/pedersen.io-spa-vue') {
        //                 sh 'yarn deploy'
        //             }
        //         }
        //     }
        // }
    }
    // post {
    //     always {
    //         withCredentials([[$class: 'StringBinding', credentialsId: 'CELEBRITYSKATEBOARDS_SPA_COVERALLS_TOKEN', variable: 'COVERALLS_REPO_TOKEN']]) {
    //             dir('/root/workspace/pedersen.io-spa-vue') {
    //                 step([$class: 'CoberturaPublisher', autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: '**/cobertura-coverage.xml', failUnhealthy: false, failUnstable: false, maxNumberOfBuilds: 0, onlyStable: false, sourceEncoding: 'ASCII', zoomCoverageChart: false]) 
    //                 sh 'yarn coveralls'
    //             }
    //         }
    //     }
    // }
}