## Don't forget to compress your responses

### Smaller files = Better performances

The Single Page Applications based on JavaScript frameworks
tend to have a big size, they reach easily 2-3 MB for simple
applications. More libraries you use more code you are sending to
the web client.

This is not a big issue during the development but your remote
users will be impacted.

The libraries, the content and the logic of the entire
application are loaded when the user hits the first page of our
application with a negative impact on the usability and the page
ranking.


To reduce the impact of the library size there are some
optimizations that can be done during the development of the
frontend (e.g. treeshaking, module split, lazy loading etc.).


## Server compression for JavaScript applications

On the server side we can quickly improve the performaces of
the application loading time reducing the size of the data
transferred from the server to the client.

For mission critical applications with public access we should
use an external proxy with possibility of load balancig and caching
like Nginx.

For applications with a limited number of concurrent users
(most of the enterprise applications) we can simply activate the
compression features of the application server.


## Spring Boot configuration

Spring Boot has some parameters that allow the activation of
the compression when the application starts in embedded mode.

[Here the link to the
documentation.](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-embedded-servlet-containers.html#how-to-enable-http-response-compression)

``` properties
server.compression.enabled=true
server.compression.mime-types=text/html,text/css,application/json,text/javascript,application/javascript
```

With this configuration the size of our JavaScript application
can be reduced by 70%.

[In my blog you can find some tests](http://javaee.ch/2017/02/20/better-performance-with-smaller-and-faster-angular-applications-using-spring-boot-and-tomcat/)