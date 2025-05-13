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
		}
	}
		
