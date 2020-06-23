import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './maincontentdisplay/landing-page/landing-page.component';
import { MainnavPageComponent } from './maincontentdisplay/mainnav-page/mainnav-page.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { CharacterPageComponent } from './maincontentdisplay/character-page/character-page.component';
import { AboutPageComponent } from './maincontentdisplay/about-page/about-page.component';

import { LoginPageComponent } from './maincontentdisplay/account-components/login-page/login-page.component';
import { RegisterPageComponent } from './maincontentdisplay/account-components/register-page/register-page.component';
import { ProfilePageComponent } from './maincontentdisplay/account-components/profile-page/profile-page.component';

import { ForumsPageComponent } from './maincontentdisplay/forums-components/forums-page/forums-page.component';
import { ForumsMainComponent } from './maincontentdisplay/forums-components/forums-main/forums-main.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { environment } from '../environments/environment';
import { PostsPageComponent } from './maincontentdisplay/forums-components/posts-page/posts-page.component';
import { ProfilePicPageComponent } from './maincontentdisplay/account-components/profile-pic-page/profile-pic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MainnavPageComponent,
    TopNavbarComponent,
    CharacterPageComponent,
    AboutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    ForumsPageComponent,
    ForumsMainComponent,
    PostsPageComponent,
    ProfilePicPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgxAuthFirebaseUIModule.forRoot({
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      databaseURL: environment.firebase.databaseURL,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId
    },
      () => 'atlas-incomplete',
      {
        enableFirestoreSync: false, // enable/disable autosync users with firestore
        toastMessageOnAuthSuccess: true, // whether to open/show a snackbar message on auth success - default : true
        toastMessageOnAuthError: true, // whether to open/show a snackbar message on auth error - default : true
        passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
        passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
        // Same as password but for the name
        nameMaxLength: 50,
        nameMinLength: 2,
        // If set, sign-in/up form is not available until email has been verified.
        // Plus protected routes are still protected even though user is connected.
        guardProtectedRoutesUntilEmailIsVerified: true,
        enableEmailVerification: true, // default: true
        authGuardFallbackURL: '/login-page',
        authGuardLoggedInURL: '/profile-page',
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
