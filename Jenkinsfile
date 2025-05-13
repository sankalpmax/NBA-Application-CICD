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
	stage('Docker Run'){
		steps{
			sh 'docker run -d -p 3000:3000 --name los-Angles-Lakers sankalp/lakers-club:01'
	
				}
			}
		}
	}		
