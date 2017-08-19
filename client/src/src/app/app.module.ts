import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PrettyJsonPipe } from './common/pretty-json/prettyJson.pipe';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { MarkdownModule } from 'angular2-markdown';
import { FooterComponent} from './common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftMenuComponent } from './gui/left-menu/left-menu.component';
import { TechnicalInfoComponent } from './common/technical-info/technical-info.component';
import { StaticPageComponent} from './static-page/static-page.component';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdSidenavModule, MdListModule } from '@angular/material';
import { MdExpansionModule} from '@angular/material';
import { MdSlideToggleModule} from '@angular/material';


const routes: Routes = [
  { path: '', redirectTo: 'static-document/home', pathMatch: 'full' },
  { path: 'static-document/:document', component: StaticPageComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PrettyJsonPipe,
    TechnicalInfoComponent,
    StaticPageComponent,
    FooterComponent,
    LeftMenuComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightJsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule,
    MdMenuModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdIconModule,
    MdSidenavModule,
    MdListModule,
    MdExpansionModule,
    MdSlideToggleModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
