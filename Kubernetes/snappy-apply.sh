#! /bin/bash

kubectl apply -f mongo-deployment.yml
kubectl apply -f mongo-service.yml
kubectl apply -f hpa-mongo.yml
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
kubectl apply -f hpa-backend.yml
kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml
kubectl apply -f hpa-frontend.yml
