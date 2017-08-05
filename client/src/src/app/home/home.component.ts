import { Component, OnInit } from '@angular/core';
import {RequestService} from '../common/http/request.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RequestService ]
})
export class HomeComponent implements OnInit {

  markdown: string;

  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.getText('rest/document/home').subscribe(
      result => { this.markdown = result; },
      error => { console.log(error._body) }
    )
  }

}
