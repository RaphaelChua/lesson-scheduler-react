pipeline {
  agent any
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
        bat 'curl -s -X POST https://api.telegram.org/bot1744027847:AAF8V-o7lnQ0Iwsx0yo88LHMxRhYeRcTbJc/sendMessage -d chat_id=-558326056 -d text="New updates on application at http://test.frontierviewer.com/#/main"'
      }
    }

  }
}