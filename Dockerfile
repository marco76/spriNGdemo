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
RUN npm install --unsafe-perm --verbose -g @angular/cli
RUN npm rebuild node-sass --force
WORKDIR /usr/src/myapp/
RUN mvn generate-resources install

RUN yes | cp -rf /usr/src/myapp/server/target/server-0.0.2-SNAPSHOT.war /usr/src/myapp

CMD ["java", "-jar", "/usr/src/myapp/server-0.0.2-SNAPSHOT.war"]

EXPOSE 8080
####
# build with:
# docker build -t javaee/springdemo .
#
# run with:
# docker run --rm -it -p 80:8080  javaee/springdemo