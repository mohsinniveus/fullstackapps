FROM openjdk:8-jdk-alpine 

COPY target/jwtdemo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080  

ENTRYPOINT ["java", "-jar", "/app.jar"]