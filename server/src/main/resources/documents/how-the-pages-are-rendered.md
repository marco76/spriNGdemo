# How the pages of this demo are built and rendered

Most of the content of this website is written is simple text files using [MarkDown](https://en.wikipedia.org/wiki/Markdown) notation.

You can see the content [here on GitHub](https://github.com/marco76/spriNGdemo/tree/master/server/src/main/resources/documents) and improve them sending pull requests.

With this solution we can store most of the content in the server and we avoid to write the content directly in the typescript classes.

When you navigate between pages the url of the page contains the reference to a document stored on the server.
A Spring controller read the reference, load the page and send the content as text to the client.

![alt text](http://molteni.io/images/page-rendering.png)

## Spring code

```java
@RestController()
@CrossOrigin()
public class DocumentController {

    private static final String DOCUMENT_SUFFIX = ".md";
    private ReadDocumentationService readDocumentationService;

    public DocumentController(ReadDocumentationService readDocumentationService) {
        this.readDocumentationService = readDocumentationService;
    }

    @RequestMapping(value = "/rest/document/{name}", method = RequestMethod.GET)
    public ResponseEntity<String> getDocument(@PathVariable String name) {
        return ResponseEntity.ok(readDocumentationService.readClassPathFile(name + DOCUMENT_SUFFIX));
    }
}

```

## Angular code

In our page we decide which page to call using a routerLink and passing the name of the page as parameter:

```html
 <div class="my-content"><a [routerLink]="['../static-document/font-awesome']">Font Awesome</a></div>
```

In the ```static-page.component.ts``` we read the parameter and we call the REST service:

```typescript
constructor(private requestService: RequestService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.requestService.getText('rest/document/' + params.get('document')))
      .subscribe(
      result => { this.markdown = result},
      error => { console.log(error._body) }
    )
  }
```

## Future improvements

- Cache the most read pages
- Use external directories for the files and not the resource dir
- Add the reference of the documents in a database to add dynamically content to the website
- Add custom properties in the text to allow e.g. relative urls for the images