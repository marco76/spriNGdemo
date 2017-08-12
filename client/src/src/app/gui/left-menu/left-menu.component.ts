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
      {label: 'Checklist, what is really needed?', icon: 'fa-file-text-o', routerLink: '../static-document/app-checklist'},

      {label: 'MarkDown for this site', icon: 'fa-file-text-o', routerLink: '../static-document/how-the-pages-are-rendered'}
    ]}, {
    label: 'Configuration',
    items: [
      {label: 'Compression',
        icon: 'ffa fa-cog', routerLink: '../static-document/config-compression'},

      {label: 'Whitelabel (404) error, PathLocationStrategy',
        icon: 'ffa fa-cog', routerLink: '../static-document/error-controller'},
      {label: 'CORS ',
        icon: 'ffa fa-cog', routerLink: '../static-document/cors-config'}

        ]},
    {
      label: 'Documentation',
      items: [
        {label: 'Swagger: REST documentation',
          icon: 'ffa fa fa-book', routerLink: '../static-document/swagger-config'}
      ]},
    {
      label: 'Spring Dev',
      items: []
    },

    {
      label: 'Angular Dev',
      items: [
        {label: 'Import Font Awesome', icon: 'fa-font-awesome', routerLink: '../static-document/font-awesome'}
      ]
    },
    {
      label: 'Build',
      items: [
        {label: 'Jenkins: installation',
          icon: 'ffa fa fa-book', routerLink: '../static-document/jenkins-install'}
      ]},
    {
      label: 'Quality',
      items: []},
    {
      label: 'Monitoring',
      items: [
        {label: 'Actuator: is your app still up?',
          icon: 'ffa fa fa-book', routerLink: '../static-document/actuator-monitoring'}
      ]
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
