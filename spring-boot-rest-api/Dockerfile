# start with base image which has Java run time
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="Mohsin" 

COPY target/jwtdemo-0.0.1-SNAPSHOT.jar app.jar

# Application runs on port 8080
EXPOSE 8080  

ENTRYPOINT ["java", "-jar", "/app.jar"]