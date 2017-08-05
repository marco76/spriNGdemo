package io.springdemo.examples.readfile;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@CrossOrigin()
public class ReadFileController {

    @Autowired
    private ReadFileService readFileService;

    @RequestMapping(value = "/rest/read-file", method = RequestMethod.GET)
    public ResponseEntity getJson() {
        return ResponseEntity.ok(readFileService.getData());
    }
}