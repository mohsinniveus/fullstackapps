pipeline {
    agent {
        docker {
            image 'openjdk:8-jdk-alpine'
            args '-v $HOME/.m2:/root/.m2'
        }
    }

    environment {
        ORG_NAME = "atmohsin"
        APP_NAME = "spring-boot-rest-api"
        APP_VERSION = "1.0-SNAPSHOT"
        APP_CONTEXT_ROOT = "/"
        APP_LISTENING_PORT = "9090"
        TEST_CONTAINER_NAME = "ci-${APP_NAME}-${BUILD_NUMBER}"
        DOCKER_HUB = credentials("${ORG_NAME}-docker-hub")
    }

    stages {
        stage('Compile') {
            steps {
                echo "-=- compiling project -=-"
                sh "./spring-boot-rest-api/mvnw clean compile"
            }
        }
    }
}