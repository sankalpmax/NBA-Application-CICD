pipeline {
    agent any

    environment {
        KUBECONFIG = '/var/lib/jenkins/.kube/config'
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/sankalpmax/NBA-Application-CICD.git'
            }
        }

        stage('Docker Build Image') {
            steps {
                sh 'docker build -t sankalparava/lakers-club:04 .'
            }
        }

        stage('Docker Run Container') {
            steps {
                sh '''
                docker run -d -p 3000:3000 --name football-club sankalparava/lakers-club:04
                '''
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        sh 'docker push sankalparava/lakers-club:04'
                    }
                }
            }
        }

        stage('Kubernetes Deploy') {
            steps {
                sh '''
                kubectl apply -f lakers-club-deployment.yaml
     		kubectl apply -f lakers-club-service.yaml           
                '''
            }
        }
    }
}
