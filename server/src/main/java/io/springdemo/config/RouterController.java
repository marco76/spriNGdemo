package io.springdemo.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by marco on 13.02.17.
 */
@Controller
public class RouterController {

    @RequestMapping({"/app-*"})
    public String app() {
        return "forward:/index.html";
    }
}
