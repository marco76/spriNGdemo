# Create Cross-Origin HTTP requests (CORS)

During the development it is a good practice to work with 2 separate application servers.

A server for your backend and a server for your frontend.

By default your Angular will use port 4200 and your Java backend the port 8080.

You will soon discover that the browsers don't like this practice and they will block the communication between frontend and backend.

For security reasons browsers don’t allow that a page answering from the domain A to load a resources from a domain B.

Using 2 different ports is like to 2 differents domains from the point of view of the server.

You can read the detailed explanation of the CORS mechanism here: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)

## How to allow CORS requests

### Angular

In our Angular requests we have to add the header:
_X-Requested-With_

This header enables a webpage to update just partially.

```typescript
this.headers = new Headers({ 'Content-Type': 'application/json' });
this.headers.append('Accept', 'application/json, text/csv');
this.headers.append('X-Requested-With', 'XMLHttpRequest');
```

### Spring Boot

You have to update the `ALLOWED_ORIGINS` constant with the URL of the frontend server sending the requests to the backend server.

In the property file:
```
app.http.cors.origins.allowed=http://localhost:4200
```

```java
@Configuration
public class CorsConfig {

    @Value("${app.http.cors.origins.allowed}")
    private String[] allowedOrigins;

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/*").allowedOrigins(allowedOrigins);
            }
        };
    }
}
```