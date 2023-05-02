# Cypress-Cucucmber-Docker-Jenkins-Allure-testing

This repository provides a sample project that demonstrates how to use Cypress-cucumber tests with Docker containers. By running Cypress in a Docker container, you can easily set up a consistent and reproducible environment for your tests.


# Prerequisites
=================

Install:

Docker
Node.js
Jenkins
Allure Reporting


You can refer to docker-compose.yml created at the root level. After creating a docker-compose.yml, next process is

1) Building a Dockerfile
To build the Docker image, navigate to the directory containing your Dockerfile and run the following command: 

" <docker build -t <image_name> . >"

2) After the docker image is built, you can verify by running it,by running the command 
    "<docker images>"
  
3) Next - docker-compose up e2e-chrome to run chrome specific browser
  
