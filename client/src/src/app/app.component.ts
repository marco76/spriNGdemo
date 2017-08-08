import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: '../static-document/home'},
      {label: 'Font Awesome', icon: 'fa-font-awesome', routerLink: '../static-document/font-awesome'},
      {label: 'MarkDown for the site', icon: 'fa-file-text-o', routerLink: '../static-document/how-the-pages-are-rendered'}
    ];
  }
}
