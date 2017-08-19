import {Component, OnInit} from '@angular/core';
import {RequestService} from '../common/http/request.service';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {environment} from '../../environments/environment';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css'],
  providers: [RequestService]
})
export class StaticPageComponent implements OnInit {

  markdown = '';

  static setVariables (markdown: string) {
    if (!markdown) {
      return '';
    }
    while (markdown.indexOf('[p]') > 0) {
      const tag = markdown.match('\\[p](.*)\\[\\/p]');
      if (tag) {
        markdown = markdown.replace(`${tag[0]}`, environment.DOCUMENT_VALUES[`${tag[1]}`]);
      } else {
        return markdown;
      }
    }
    return markdown;
  }

 constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
      this.requestService.getText('rest/document/' + params.get('document')))
      .subscribe(
      result => {this.markdown = StaticPageComponent.setVariables(result)},
      error => { console.log(error._body) }
    );

    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
    }
}
