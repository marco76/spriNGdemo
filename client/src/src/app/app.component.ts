import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Architecture',
      items: [ {label: 'Main', icon: 'fa-home', routerLink: '../static-document/home'},
        {label: 'MarkDown for this site', icon: 'fa-file-text-o', routerLink: '../static-document/how-the-pages-are-rendered'}

      ]}, {
      label: 'Configuration',
      items: [
        {label: 'PathLocationStrategy, avoid the Whitelabel (404) error',
          icon: 'ffa fa-cog', routerLink: '../static-document/error-controller'},
        {label: 'Import Font Awesome', icon: 'fa-font-awesome', routerLink: '../static-document/font-awesome'}


      ]},

      {
        label: 'Documentation',
        items: [
          {label: 'Swagger: REST documentation',
            icon: 'ffa fa fa-book', routerLink: '../static-document/swagger-config'}
          ]},
      {
        label: 'Development',
        items: []
      },
      {
        label: 'Build',
        items: []
      },
      {
        label: 'Quality',
        items: []},
      {
        label: 'Monitoring',
        items: []
      }
       ];
  }
}
