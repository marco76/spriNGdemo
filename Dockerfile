FROM openjdk:8-jdk-alpine

MAINTAINER "Marco Molteni <moltenma@gmail.com>"

# set the path of the working dir

WORKDIR /usr/src/myapp

RUN chmod 777 /tmp
ADD server/target/server-0.0.4-SNAPSHOT.war /opt/myapp

CMD ["java", "-jar", "/usr/src/myapp/server-0.0.4-SNAPSHOT.war"]

####
# build with:
# docker build -t javaee/springdemo .
#
# run with:
# docker run --rm -it -p 80:8080  javaee/springdemo
