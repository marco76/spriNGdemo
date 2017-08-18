FROM ubuntu:17.04

MAINTAINER "Marco Molteni <moltenma@gmail.com>"

RUN apt-get -y update

RUN apt-get -y install openjdk-8-jdk

# set the path of the working dir
RUN mkdir /opt/myapp
WORKDIR /opt/myapp

RUN chmod 777 /tmp
ADD server/target/server-0.0.4-SNAPSHOT.war /opt/myapp

CMD ["java", "-jar", "/opt/myapp/server-0.0.4-SNAPSHOT.war"]

####
# build with:
# docker build -t javaee/springdemo .
#
# run with:
# docker run --rm -it -p 80:8080  javaee/springdemo
