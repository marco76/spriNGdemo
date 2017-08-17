# Spring Boot 2.0 Demo with Angular 5 and Material : How to build a professional application step by step

This website is like a programming book but it's live and it's working.

I'm trying to collect the good practices and code fragments frequently used during the development of a professional application.

These good practices are used in a real work application ... this website. If the solutions proposed don't work (anymore), this website will simply disappear.

The live version is here: [http://molteni.io](http://molteni.io)
## Features

The technologies used are the following:

GitHub (https://github.com/marco76/spriNGdemo)
Spring Boot 2.0 beta (last available version)
Angular 5.0 beta (last available version)
Jenkins 2.0 (Visible here)
SonarQube (Visible here)
Docker Hub ([Here][https://hub.docker.com/r/javaee/springdemo/])
Docker Cloud, Swarm, Compose
IntelliJ and VisualStudio Code
Swagger
Angular Material

## How to install

__Prerequisites__

- you need maven, npm, git

__Production mode__

- clone the git project
from the root of the project launch mvn package this generates a package named ROOT.war in the PROJECT/server/target directory
you can deploy this package in your favourite application server. The Angular application should answer at the requests to http://localhost:8080
Development mode

__Development mode__

- clone the git project
You can start the server using your favourite IDE. The project uses a standard Maven directory structure. You need to configure the server to deploy the server.war artifact.
from the PROJECT/client/src directory install the npm packages : npm install
launch the client with ng serve. The client uses the port 4200 (default for Angular CLI) and you can navigate to http://localhost:4200

__Docker image__
 
 You can find the docker image here : https://hub.docker.com/r/javaee/springdemo/
 
 The docker image install a linux distribution, download the sources and the required libraries and application server (custom edition).
 It compiles the sources codes and deploy the application on the port 80.
 