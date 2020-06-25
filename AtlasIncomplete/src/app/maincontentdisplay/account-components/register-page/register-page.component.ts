import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  user: firebase.User;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  registerSuccess(event: firebase.User) {
    event.updateProfile(
      { photoURL: 'https://cdn.discordapp.com/attachments/467185767593148418/725491929713999882/Character_Study.png' }
    ).finally(() =>
      this.route.navigateByUrl('/mainnav-page')
    );
  }

  logIn() {
    this.route.navigateByUrl('/login-page');
    this.route.dispose();
  }

}
