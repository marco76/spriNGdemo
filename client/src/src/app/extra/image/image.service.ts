import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {JsonString} from "./JsonString";
import {environment} from "../../../environments/environment";

@Injectable()
export class ImageService {

  serverUrl : string = environment.BACKEND_URL + '/image/angular';

    constructor (private http: Http) {}

    getImage() : Observable<JsonString> {
        return this.http.get(this.serverUrl)
            .map((response : Response) => {
                console.log('called the service at this URL:' + this.serverUrl);
                console.log(JSON.stringify(response.json()));

                return response.json();
        })
    }
}
