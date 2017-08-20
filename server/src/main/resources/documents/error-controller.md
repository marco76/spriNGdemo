# Configuration - How to avoid the 'Whitelabel error'

Your Angular application uses routes to show pages, e.g. http://springdemo.io/my-beautiful-page. There is no problem when the navigation is done directly inside the application.

When you click on the refresh button or you call directly the URL from the browser you will receive a 404 error. Using Spring Boot backend the page will show 'Whitelabel error'.

In the past AngularJS used the Hash Style ('#') and you didn't encounter this 404 error. Angular preferred to adopt the HTML5 style getting rid of the hash. In the [Angular official documentation](https://angular.io/guide/router#browser-url-styles>) you find the reasons for this change.

We could configure Angular to use the Hash Style but we prefer to use the HTML5 style delegating the resolution of the problem to our backend.

## How to solve the problem with Spring?

The goal is to redirect the requests that return a 404 error (page not found) to the root of the Angular application('/'), Angular will take care of the rest.

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