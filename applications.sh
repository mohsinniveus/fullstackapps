#!/bin/bash
echo "**** Begin building Docker images"

cd spring-boot-rest-api
docker build -t atmohsin/spring-boot-rest-api:v1.0 .
docker push atmohsin/spring-boot-rest-api:v1.0

cd ..
cd angular9client
docker build -t atmohsin/angular9client:v1.0 .
docker push atmohsin/angular9client:v1.0


cd k8s
kubectl create -f namespace-development.yaml
kubectl create -f namespace-testing.yaml
kubectl create -f persistent-volume-mysql.yaml
kubectl create -f persistent-volume-claim-mysql.yaml
kubectl create -f deployment-mysql.yaml
kubectl create -f service-mysql.yaml
kubectl create -f deployment-spring-boot-rest-api-v1.0.yaml
kubectl create -f service-spring-boot-rest-api-v1.0.yaml
kubectl create -f deployment-angular9client-v1.0.yaml
kubectl create -f service-angular9client-v1.0.yaml