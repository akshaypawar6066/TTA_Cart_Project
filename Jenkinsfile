pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_ENV',
            choices: ['qa', 'stg', 'dev', 'prod'],
            description: 'Select Environment'
        )

        string(
            name: 'BRANCH_NAME',
            defaultValue: 'master',
            description: 'Git Branch to Checkout'
        )
    }

    stages {

        stage('Checkout') {
            steps {
                git(
                    branch: "${params.BRANCH_NAME}",
                    url: 'https://github.com/akshaypawar6066/TTA_Cart_Project.git'
                )
            }
        }

        stage('Environment Details') {
            steps {
                echo "Selected Environment: ${params.TEST_ENV}"
                echo "Selected Branch: ${params.BRANCH_NAME}"

                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                withEnv(["TEST_ENV=${params.TEST_ENV}"]) {
                    bat 'npm run ci:all'
                }
            }
        }
    }

    post {

        always {

            junit(
                allowEmptyResults: true,
                testResults: 'test-results/results.xml'
            )

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'tta-report',
                reportFiles: 'index.html',
                reportName: 'TTA Automation Report'
            ])

            archiveArtifacts(
                artifacts: 'tta-report/**,playwright-report/**,test-results/**,allure-results/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright execution completed successfully'
        }

        failure {
            echo 'Playwright execution failed'
        }
    }
}