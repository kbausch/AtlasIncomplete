import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataRetrieverService } from 'src/app/shared/services/data-retriever.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user: firebase.User;

  constructor(private route: Router, private afa: AngularFireAuth) { 
  }

  ngOnInit(): void {
  }

  registerSuccess() {
    this.afa.user.subscribe((user)=>{
      this.user = user;
    });
    this.user.updateProfile(
      {photoURL: 'https://cdn.discordapp.com/attachments/467185767593148418/724806635188650074/unknown.png'}
      ).finally(() =>
        this.route.navigateByUrl('/mainnav-page')
      );
  }

  logIn(){
    this.route.navigateByUrl('/login-page');
  }

}
