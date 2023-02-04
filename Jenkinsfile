pipeline {
    agent any
    
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
            }
        }
    }
}
