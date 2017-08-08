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
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MenuModule, MenuItem} from 'primeng/primeng';

import { TechnicalInfoComponent } from './common/technical-info/technical-info.component';
import { MaskDirective } from './common/mask/mask-directive';
import { StaticPageComponent} from './static-page/static-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import { MdIconModule} from '@angular/material';
import {
  CovalentLayoutModule, CovalentStepsModule
} from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';


const routes: Routes = [
  { path: '', redirectTo: 'static-document/home', pathMatch: 'full' },
   { path: 'static-document/:document', component: StaticPageComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    PrettyJsonPipe,
     TechnicalInfoComponent,
    MaskDirective,
    StaticPageComponent,
    FooterComponent
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
    MenuModule,
    NgbModule.forRoot(),
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    MdIconModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
