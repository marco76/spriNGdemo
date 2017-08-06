import { Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {environment} from '../../../environments/environment';
import ResponseInfo from '../technical-info/ResponseInfo';
import 'rxjs/add/observable/of'


@Injectable()
export class RequestService implements OnInit {

  serverUrl: string = environment.BACKEND_URL;

  private headers: Headers;

  constructor(private http: Http) { }

  sendRequest(url: string, model: any): Observable<any> {
    const options = new RequestOptions({ headers: this.headers });

    return this.http
      .post(this.serverUrl + url, model, options)
      .map((response: Response) => {
        const responseInfo = new ResponseInfo();
        responseInfo.status = response.status;
        if (response.text()) {
            responseInfo.text = response.json();
        } else {
          responseInfo.text = '';
        }
        responseInfo.error = false;
        return responseInfo;
      }).catch((error) =>
        Observable.of(this.buildErrorAnswer(error))
      );
  }

  getText(url: string): Observable<any> {

    const options = new RequestOptions({ headers: this.headers });

    return this.http
      .get(this.serverUrl + '/' + url, options)
      .map((response: Response) => {
         return response.text();
      }).catch((error) =>
        Observable.of(this.buildErrorAnswer(error))
      );
  }

  sendGet(url: string): Observable<any> {

    const options = new RequestOptions({ headers: this.headers });

    return this.http
      .get(this.serverUrl + '/' + url, options)
      .map((response: Response) => {
        const responseInfo = new ResponseInfo();
        responseInfo.status = response.status;
        if (response.text()) {
          responseInfo.text = response.json();
        } else {
          responseInfo.text = '';
        }
        responseInfo.error = false;
        return responseInfo;
      }).catch((error) =>
        Observable.of(this.buildErrorAnswer(error))
      );
  }

  buildErrorAnswer(error): ResponseInfo {
    const responseInfo = new ResponseInfo();
    responseInfo.status = error.status;
    responseInfo.text = error.json();
    responseInfo.error = true;
    return responseInfo

  }

  ngOnInit() {

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Accept', 'application/json, text/csv');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

  }
}
