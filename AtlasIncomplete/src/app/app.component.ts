import { Component } from '@angular/core';
import { fader } from './router-animations';
import { RouterOutlet } from '@angular/router';
import * as firebase from 'firebase/app';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'AtlasIncomplete';

  constructor(){
    firebase.initializeApp(environment.firebase);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
