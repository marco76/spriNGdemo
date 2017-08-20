# Configuration - How to avoid the 'Whitelabel error'

Your Angular application uses routes to show pages, e.g. http://springdemo.io/my-beautiful-page. There is no problem when the navigation is done directly inside the application.

When you click on the refresh button or you call directly the URL from the browser you will receive a 404 error. Using Spring Boot backend the page will show 'Whitelabel error'.

In the past AngularJS used the Hash Style ('#') and you didn't encounter this 404 error. Angular preferred to adopt the HTML5 style getting rid of the hash. In the [Angular official documentation](https://angular.io/guide/router#browser-url-styles>) you find the reasons for this change.

We could configure Angular to use the Hash Style but we prefer to use the HTML5 style delegating the resolution of the problem to our backend.

## How to solve the problem with Spring?

You can redirect the requests that come to the server to the root page of Angular:

``` java
@Controller
public class ForwardController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that route is preserved.
        return "forward:/";
    }
}
```

## Alternative method: handle the 404 error

An alternative solution is to redirect the requests that return a 404 error (page not found) to the root of the Angular application('/').

Here the solution implemented with Spring.

``` java
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class RestErrorController implements ErrorController {

    private static final String ERROR_PATH = "/error";
    private static final String TARGET_PATH = "forward:/";

    @RequestMapping(value = "/error")
    public String error() {
        return TARGET_PATH;
    }

    @Override
    public String getErrorPath() {
        return ERROR_PATH;
    }
}
```

This solution has problems with the styles packaged with webpack.
When the page is refreshed the relative path loaded is e.g. /static-pages/styles.css but it should be /styles.css
I leave this solution because is commonly used and referenced.  

### Links
Solution adopted: [StackOverflow](https://stackoverflow.com/questions/24837715/spring-boot-with-angularjs-html5mode)