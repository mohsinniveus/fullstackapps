# start with base image which has Java run time
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="Mohsin" 

COPY target/dependency/jacocoagent.jar jacocoagent.jar
COPY target/jwtdemo.jar app.jar

# Application runs on port 9091
EXPOSE 9090  

ENTRYPOINT ["java", "-jar", "/app.jar"]