package io.springdemo.examples.extra.image;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by marco on 21.01.17.
 */
@RestController
@CrossOrigin()
public class ImageController {

    private static String imagesPath = "/images/";
    private static String imageName = "angular.png";

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET)
    public @ResponseBody
    Map<String, String> getImage(@PathVariable String id) throws IOException, URISyntaxException {

        // getFile works with filesystems files
        // File file = new ClassPathResource("classpath:/" + imagesPath + imageName).getFile();

        InputStream stream = new ClassPathResource(imagesPath + imageName).getInputStream();

        byte[] targetArray = new byte[stream.available()];
        stream.read(targetArray);
        String encodeImage = Base64.getEncoder().withoutPadding().encodeToString(targetArray);

        Map<String, String> jsonMap = new HashMap<>();

        jsonMap.put("content", encodeImage);

        return jsonMap;
    }
}
