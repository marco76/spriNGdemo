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
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { MatExpansionModule} from '@angular/material';
import { MatSlideToggleModule} from '@angular/material';
import { MatChipsModule} from '@angular/material';
import { ThemeComponent } from './page/theme/theme.component';


const routes: Routes = [
  { path: '', redirectTo: 'static-document/home', pathMatch: 'full' },
  { path: 'static-document/:document', component: StaticPageComponent },
  { path: 'page/:document', component: ThemeComponent }

  ];

@NgModule({
  declarations: [
    AppComponent,
    PrettyJsonPipe,
    TechnicalInfoComponent,
    StaticPageComponent,
    FooterComponent,
    LeftMenuComponent,
    ThemeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightJsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
