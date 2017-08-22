import {Component, OnInit} from '@angular/core';
import {RequestService} from '../../common/http/request.service';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
  providers: [RequestService]
})
export class ThemeComponent implements OnInit {

  markdown = '';
  gitDocument: string;
  githubReference: string;

  constructor(private requestService: RequestService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {

      this.gitDocument = params.get('document');
      this.githubReference = `${environment.GIT_DOCUMENTS_URL}${this.gitDocument}.md`;

      return this.requestService.getText('rest/document/' + this.gitDocument)
    })
      .subscribe(
        result => {this.markdown = result},
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
