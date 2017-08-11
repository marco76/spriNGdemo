FROM ubuntu:17.04
#FROM maven:3.5.0-jdk-8

MAINTAINER "Marco Molteni <moltenma@gmail.com>"

RUN apt-get -y update

RUN apt-get -y install curl openjdk-8-jdk
# set the path JAVA_HOME for maven
#RUN export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64

RUN apt-get -y update

# install git from debian repositories
RUN apt-get install -y git  wget

# get maven 3.2.2
RUN wget --no-verbose -O /tmp/apache-maven-3.5.0.tar.gz http://archive.apache.org/dist/maven/maven-3/3.5.0/binaries/apache-maven-3.5.0-bin.tar.gz

# verify checksum
RUN echo "35c39251d2af99b6624d40d801f6ff02 /tmp/apache-maven-3.5.0.tar.gz" | md5sum -c

# install maven
RUN tar xzf /tmp/apache-maven-3.5.0.tar.gz -C /opt/
RUN ln -s /opt/apache-maven-3.5.0 /opt/maven
RUN ln -s /opt/maven/bin/mvn /usr/local/bin
RUN rm -f /tmp/apache-maven-3.5.0.tar.gz
ENV MAVEN_HOME /opt/maven


# set the path of the working dir
RUN mkdir /usr/src/myapp
WORKDIR /usr/src/myapp

# install node.js
RUN curl -sL curl -sL https://deb.nodesource.com/setup_8.x | bash -

# https://docs.npmjs.com/getting-started/fixing-npm-permissions
RUN apt-get install -y nodejs

# clone the repository with the code
RUN git clone -b candidate git://github.com/marco76/spriNGdemo.git

# install npm modules
WORKDIR /usr/src/myapp/spriNGdemo/client/src
RUN npm install --unsafe-perm -g @angular/cli
RUN npm rebuild node-sass --force
WORKDIR /usr/src/myapp/spriNGdemo
RUN mvn generate-resources install

RUN yes | cp -rf /usr/src/myapp/spriNGdemo/server/target/server-0.0.2-SNAPSHOT.war /usr/src/myapp

CMD ["java", "-jar", "/usr/src/myapp/spriNGdemo/server/target/server-0.0.2-SNAPSHOT.war"]

EXPOSE 80
####
# build with:
# docker build -t javaee/springdemo .
#
# run with:
# docker run --rm -it -p 80:8080  javaee/springdemo