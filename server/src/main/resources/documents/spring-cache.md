# Use JCache in you application

## Why use cached objects?

For most of the professional applications the use of some form of caching is required to improve the performances and to reduce the interactions with slow medias (database, disk, external services etc.)

![image???]([p]BACKEND_URL[/p]/images/cache-schema.png)

## Example of publishing our pages without cache

In this website we store the articles of the documentation in simple MarkDown files.
 
When the user ask for a documentation page the Java backend executes the following operations:

- search the file in the Operating System
- open the file
- read the content of the file and store it in a variable
- close the file
- build a Java object with the information of the document (title, content etc.)
- send the result to the frontend using REST services

_If you open the file 10 times, this operation will be repeated 10 times._

## ... and with cache

After the configuration of the Cache the operations are the following:

- (1a) search the document in the Cache
- (2a) the document is not in the cache
  - search the file in the Operating System
  - open the file
  - read the content of the file and store it in a variable
  - close the file
  - build a Java object with the information of the document (title, content etc.)
- (3a) store the object in the cache
- (4a) send the result to the frontend using REST services

For the following requests the operations are the following:

- (1b) search the document in the Cache
- (2b) return the object to the frontend

For our application using the cache reduces the response time required to read a document from 100 milliseconds to 3-5 milliseconds, the cache is 20-30 time more fast ... with the default configuration.

## How to configure it

We decided to use the simplest possible cache configuration: embedded mode, without optimization.

In our application we add Hazelcast:

### Add the default configuration

``` xml
 <dependency>
    <groupId>com.hazelcast</groupId>
    <artifactId>hazelcast</artifactId>
</dependency>
```

Create a Spring configuration class:

```java 
package io.springdemo.config;

import com.hazelcast.config.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CacheConfig {

    @Bean
    public Config config() {
        return new Config();
    }
}
```

When you add the Spring configuration Hazelcast will automatically create an instance at the next start:

``` shell
INFO 6888 --- [ost-startStop-1] com.hazelcast.instance.AddressPicker     : [LOCAL] [dev] [3.9] Prefer IPv4 stack is true.
INFO 6888 --- [ost-startStop-1] com.hazelcast.instance.AddressPicker     : [LOCAL] [dev] [3.9] Picked [192.168.0.18]:5701, using socket ServerSocket[addr=/0:0:0:0:0:0:0:0,localport=5701], bind any local is true
INFO 6888 --- [ost-startStop-1] com.hazelcast.system                     : [192.168.0.18]:5701 [dev] [3.9] Hazelcast 3.9 (20171023 - b29f549) starting at [192.168.0.18]:5701
INFO 6888 --- [ost-startStop-1] com.hazelcast.system                     : [192.168.0.18]:5701 [dev] [3.9] Copyright (c) 2008-2017, Hazelcast, Inc. All Rights Reserved.
INFO 6888 --- [ost-startStop-1] com.hazelcast.system                     : [192.168.0.18]:5701 [dev] [3.9] Configured Hazelcast Serialization version: 1
INFO 6888 --- [ost-startStop-1] c.h.s.i.o.impl.BackpressureRegulator     : [192.168.0.18]:5701 [dev] [3.9] Backpressure is disabled
INFO 6888 --- [ost-startStop-1] com.hazelcast.instance.Node              : [192.168.0.18]:5701 [dev] [3.9] Creating MulticastJoiner
INFO 6888 --- [ost-startStop-1] c.h.s.i.o.impl.OperationExecutorImpl     : [192.168.0.18]:5701 [dev] [3.9] Starting 4 partition threads and 3 generic threads (1 dedicated for priority tasks)
INFO 6888 --- [ost-startStop-1] c.h.internal.diagnostics.Diagnostics     : [192.168.0.18]:5701 [dev] [3.9] Diagnostics disabled. To enable add -Dhazelcast.diagnostics.enabled=true to the JVM arguments.
INFO 6888 --- [ost-startStop-1] com.hazelcast.core.LifecycleService      : [192.168.0.18]:5701 [dev] [3.9] [192.168.0.18]:5701 is STARTING
INFO 6888 --- [ost-startStop-1] com.hazelcast.system                     : [192.168.0.18]:5701 [dev] [3.9] Cluster version set to 3.9
INFO 6888 --- [ost-startStop-1] c.h.internal.cluster.ClusterService      : [192.168.0.18]:5701 [dev] [3.9] 

Members {size:1, ver:1} [
	Member [192.168.0.18]:5701 - 7a412631-59f2-44fd-87c0-82dedbcfb7f3 this
]

INFO 6888 --- [ost-startStop-1] com.hazelcast.core.LifecycleService      : [192.168.0.18]:5701 [dev] [3.9] [192.168.0.18]:5701 is STARTED

```

## Add @Cacheable
In our project we want to cache the documents showed by the application.

We add the annotation `@Cacheable`to the method that read the documents in the classpath (`ReadDocumentationServiceImpl.java`):

```java
@Cacheable("Document")
    public String readClassPathFile(final String documentPath) {
```

Add the next start the cache will be registered:
```shell
INFO 7290 --- [           main] .d.s.w.r.o.CachingOperationNameGenerator : Generating unique operation named: getDocumentUsingGET_1
```


## Enable the caching
To activate the caching mechanism of Spring we need add the `@EnableCaching` annotation in our application:
```java
 @SpringBootApplication
    @EnableCaching
    @ComponentScan(basePackages = "io.springdemo")
    public class Application {
        public static void main(String [] args){
            SpringApplication.run(Application.class, args);
        }
    }
```

After the restart the cache is active.

### Next steps
- Cloud: share the cache between instances of the application
- Handle the cache: empty the cache and reload the documents