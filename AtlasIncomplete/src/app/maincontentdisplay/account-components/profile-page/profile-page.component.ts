import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profilePicker = false;
  user: firebase.User

  constructor(private route: Router, private afa: AngularFireAuth) { 
    this.afa.user.subscribe((user: firebase.User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  signOut(){
    this.route.navigateByUrl('/');
  }
}
