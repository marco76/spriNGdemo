# Build your docker deliverable with Jenkins

In the general overview of our Jenkins Pipeline we saw that Jenkins build the docker image that will be delivered to the cloud.

![alt text]([p]BACKEND_URL[/p]/images/jenkins-docker.png)

## Include your artifact in the docker image

In the pipeline of Jenkins when the jar/war artifact is ready we can include it in  a docker image that will start the application.

As image we use the official [Open JDK Docker Image](https://hub.docker.com/_/openjdk/).

If you need the Oracle Java JDK you have to prepare the docker image yourself. Oracle JDK has licences constraints for his distributions and it cannot be included in docker images freely downloadable.

We chose to use the Alpine edition of the JDK to reduce the size of the deliverable. 


```docker
FROM openjdk:8-jdk-alpine

MAINTAINER "Marco Molteni <moltenma@gmail.com>"

ADD server/target/server-0.0.4-SNAPSHOT.war /usr/src/myapp/myApp.war

CMD ["java", "-jar", "/usr/src/myapp/myApp.war"]
```

The Dockerfile is really short and easy to understand. What is important to note is the _ADD_ instruction.
We are copying the deliverable created during the previous Jenkins step from the Jenkins server to the docker image.

The _CMD_ instructions will be executed only when the docker image will be instantiated as container: ``docker run --rm -it -p 80:8080  javaee/springdemo``

## Build all from the code source in a clean Ubuntu

An alternative to the previous 'light' deploy is to create a docker image that build the application from the code source in an empty environment.
This solution is good to verify that our application can be built from scratch without any potential dependency issue (cache, library version etc) with our Jenkins environment.

The full build is maybe the only option you don't use Jenkis but you build the image directly in Docker Cloud or AWS.

Here an example that contains the full process of building and deploying the application starting from an empty OS and the GitHub sources:
You can find this file on GitHub (documents/dockerfile-full-process)

```docker
FROM ubuntu:17.04

MAINTAINER "Marco Molteni <moltenma@gmail.com>"

RUN apt-get -y update

RUN apt-get -y install curl openjdk-8-jdk

RUN apt-get install -y git  wget

### maven : begin

RUN wget --no-verbose -O /tmp/apache-maven-3.5.0.tar.gz http://archive.apache.org/dist/maven/maven-3/3.5.0/binaries/apache-maven-3.5.0-bin.tar.gz

# verify checksum
RUN echo "35c39251d2af99b6624d40d801f6ff02 /tmp/apache-maven-3.5.0.tar.gz" | md5sum -c

RUN tar xzf /tmp/apache-maven-3.5.0.tar.gz -C /opt/
RUN ln -s /opt/apache-maven-3.5.0 /opt/maven
RUN ln -s /opt/maven/bin/mvn /usr/local/bin
RUN rm -f /tmp/apache-maven-3.5.0.tar.gz
ENV MAVEN_HOME /opt/maven

### maven : end

# set the path of the working dir
RUN mkdir /usr/src/myapp
WORKDIR /usr/src/myapp

# install node.js
RUN curl -sL curl -sL https://deb.nodesource.com/setup_8.x | bash -

# https://docs.npmjs.com/getting-started/fixing-npm-permissions
RUN apt-get install -y nodejs

# clone the repository with the code
RUN git clone -b master git://github.com/marco76/spriNGdemo.git

# install npm modules
WORKDIR /usr/src/myapp/spriNGdemo/client/src
RUN npm install --unsafe-perm -g @angular/cli
RUN npm rebuild node-sass --force
WORKDIR /usr/src/myapp/spriNGdemo
RUN mvn generate-resources install
RUN chmod 777 /tmp

RUN yes | cp -rf /usr/src/myapp/spriNGdemo/server/target/server-0.0.4-SNAPSHOT.war /usr/src/myapp

CMD ["java", "-jar", "/usr/src/myapp/server-0.0.4-SNAPSHOT.war"]
```

### TODO
- path and versions in parameters