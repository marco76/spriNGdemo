import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {

  list = [{
    label: 'Architecture',
    items: [ {label: 'Main', icon: 'fa-home', routerLink: '../static-document/home'},
      {label: 'MarkDown for this site', icon: 'fa-file-text-o', routerLink: '../static-document/how-the-pages-are-rendered'}

    ]}, {
    label: 'Configuration',
    items: [
      {label: 'Compression',
        icon: 'ffa fa-cog', routerLink: '../static-document/config-compression'},

      {label: 'Whitelabel (404) error, PathLocationStrategy',
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
    },
    {
      label: 'Cheat Sheet',
      items: [
        {label: 'Docker',
          icon: 'ffa fa fa-book', routerLink: '../static-document/docker-cheatsheet'}
      ]
    }
  ]
}
