package io.springdemo.controller.document;

import io.springdemo.examples.readdocumentation.ReadDocumentationService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin()
public class DocumentController {

    private static final String DOCUMENT_SUFFIX = ".md";
    private ReadDocumentationService readDocumentationService;

    public DocumentController(ReadDocumentationService readDocumentationService) {
        this.readDocumentationService = readDocumentationService;
    }

    @ApiOperation(value = "Return the MarkDown text for a given filename",
            notes = "The text returned is in MD format.")
    @RequestMapping(value = "/rest/document/{name}", method = RequestMethod.GET)
    public ResponseEntity<String> getDocument(@PathVariable String name) {
        return ResponseEntity.ok(readDocumentationService.readClassPathFile(name + DOCUMENT_SUFFIX));
    }
}