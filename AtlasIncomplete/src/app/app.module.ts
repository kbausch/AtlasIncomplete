import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './maincontentdisplay/landing-page/landing-page.component';
import { MainnavPageComponent } from './maincontentdisplay/mainnav-page/mainnav-page.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CharacterPageComponent } from './maincontentdisplay/character-page/character-page.component';
import { LoremechnavPageComponent } from './maincontentdisplay/loremechnav-page/loremechnav-page.component';
import { AboutPageComponent } from './maincontentdisplay/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainnavPageComponent,
    TopNavbarComponent,
    CharacterPageComponent,
    LoremechnavPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
