import {Component, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Location} from '@angular/common';
import {ImageService} from "./image.service";
import {DomSanitizer} from '@angular/platform-browser';
import {JsonString} from "./JsonString";

@Component({
    selector: 'simple-image',
    template: `
<div class="row">
<div class="col-md-10">
  
     In this example we load an image from a protected ressource on the server. <br>
     The image is not accessible directly from the web.
     </div>
  </div>
     <img [src]='image'>     
    `,
    providers: [HttpModule, ImageService, Location]
    })


export class ImageComponent implements OnInit{

    image : any;
    private sanitizer: DomSanitizer;
    private readonly imageType : string = 'data:image/PNG;base64,';

    constructor(private imageService : ImageService, sanitizer : DomSanitizer){
        this.imageService = imageService;
        this.sanitizer = sanitizer;
    }

    getImage(){

       this.imageService.getImage()
           .subscribe((data :JsonString ) => {
               console.log("sanitizing the url");
               this.image = this.sanitizer.bypassSecurityTrustUrl(this.imageType + data.content);
           }
       )
    }

    ngOnInit(){
        this.getImage();
    }
}


