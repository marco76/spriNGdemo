FROM openjdk:8u141-jdk
FROM maven:3.5.0-jdk-8

MAINTAINER "Marco Molteni <javaee.ch>"

# set the path JAVA_HOME for maven
RUN export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64

# install git from debian repositories
RUN apt-get install -y git

# set the path of the working dir
COPY . /usr/src/myapp
WORKDIR /usr/src/myapp

# install node.js
RUN curl -sL curl -sL https://deb.nodesource.com/setup_8.x | bash -

# https://docs.npmjs.com/getting-started/fixing-npm-permissions
RUN apt-get install -y nodejs

# clone the repository with the code
RUN git clone -b candidate git://github.com/marco76/spriNGdemo.git

# install npm modules
WORKDIR /usr/src/myapp/client/src
RUN npm install -g @angular/cli
WORKDIR /usr/src/myapp/
RUN mvn generate-resources package

RUN yes | cp -rf /usr/src/myapp/server/target/server-0.0.1-SNAPSHOT.war /usr/src/myapp

CMD ["java", "-jar", "/usr/src/myapp/server-0.0.1-SNAPSHOT.war"]

EXPOSE 80
####
# build with:
# docker build -t javaee/spring-demo .
#
# run with:
# docker run --rm -it -p 80:80  javaee/java-demo