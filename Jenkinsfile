pipeline {
  agent any
  stages {
    stage('Initialise and Run') {
      steps {
        bat 'docker-compose down -v'
        bat 'docker-compose up --build -d'
      }
    }

    // stage('Notify') {
    //   steps {
    //     bat '%PYTHON3% telegram.py %botID% %chatID% "New updates on http://test.frontierviewer.com/sign-in"'
    //   }
    // }

  }
}