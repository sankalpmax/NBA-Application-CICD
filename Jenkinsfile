pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/sankalpmax/NBA-Application-CICD.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t sankalparava/lakers-club:01 .'
            }
        }

        stage('Docker Run') {
            steps {
                sh 'docker run -d -p 3000:3000 --name los-Angles-Lakers sankalparava/lakers-club:01 || true'
            }
        }

        stage('Docker Image Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        sh 'docker push sankalparava/lakers-club:01'
                    }
                }
            }
        }
    }
}

