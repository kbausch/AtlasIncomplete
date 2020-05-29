import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './maincontentdisplay/landing-page/landing-page.component';
import { MainnavPageComponent } from './maincontentdisplay/mainnav-page/mainnav-page.component';
import { CharacterPageComponent } from './maincontentdisplay/character-page/character-page.component';
import { AboutPageComponent } from './maincontentdisplay/about-page/about-page.component';
import { LoginPageComponent } from './maincontentdisplay/login-page/login-page.component';



const routes: Routes = [
  {path: '', component : LandingPageComponent, data: {animation: 'landPage'}},
  {path: 'mainnav-page', component : MainnavPageComponent, data: {animation: 'mainNav'}},
  {path: 'character-page', component : CharacterPageComponent},
  {path: 'about-page', component : AboutPageComponent},
  {path: 'login-page', component : LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
