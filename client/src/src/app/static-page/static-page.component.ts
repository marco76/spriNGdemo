import {Component, OnInit} from '@angular/core';
import {RequestService} from '../common/http/request.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css'],
  providers: [RequestService]
})
export class StaticPageComponent implements OnInit {

 private document: string;
 markdown = '';

 constructor(private requestService: RequestService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.requestService.getText('rest/document/' + params.get('document')))
      .subscribe(
      result => { this.markdown = result},
      error => { console.log(error._body) }
    )
  }
}
