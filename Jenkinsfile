pipeline {
  agent any
  triggers {
    when {
      branch "main"
    }
  }
  stages {
    stage('Initialise') {
      steps {
        bat 'yarn install'
      }
    }

    stage('Publish') {
      steps {
        bat 'yarn build'
        bat 'del /f/s/q C:\\website-react\\*'
        bat 'for /d %%x in (C:\\website-react\\*) do rd /s /q "%%x"'
        bat 'xcopy "C:\\Windows\\System32\\config\\systemprofile\\AppData\\Local\\Jenkins.jenkins\\workspace\\lesson-scheduler-react_main\\build" "C:\\website-react" /h /i /c /k /e /r /y'
      }
    }

    stage('Notify') {
      steps {
        bat '%PYTHON3% telegram.py 1744027847:AAF8V-o7lnQ0Iwsx0yo88LHMxRhYeRcTbJc -558326056 "Testing! 123"'
      }
    }

  }
  environment {
    PYTHON3 = 'C:\\Users\\Raphael\\AppData\\Local\\Programs\\Python\\Python39\\python.exe'
  }
}