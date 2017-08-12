node {

    stage ('build') {
  git branch: 'candidate', url: 'https://github.com/marco76/spriNGdemo.git';
  sh 'mvn clean install';
  archiveArtifacts 'server/target/*.war';
    }



stage('SonarQube analysis') {
//    def scannerHome = tool 'SonarQube Scanner 3';
    withSonarQubeEnv('SonarQube Local') {
   //   sh "${scannerHome}/bin/sonar-scanner"
    sh 'mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.2:sonar'
    }
  }


}