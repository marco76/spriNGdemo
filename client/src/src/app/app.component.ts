import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public bigScreen: boolean;
  public openedSidenav: boolean;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
       this.configureSideNav()
  }

  ngOnInit() {
    this.configureSideNav();
  }

  configureSideNav() {
    this.bigScreen = window.innerWidth > 800;
    this.openedSidenav = this.bigScreen;
  }

  onRouteClicked(route: String) {
    if (!this.bigScreen) {
      this.openedSidenav = false;
    }
  }
}
