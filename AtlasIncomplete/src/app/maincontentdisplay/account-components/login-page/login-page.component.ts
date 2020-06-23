import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  printUser(event) {
    this.route.navigateByUrl('/');
  }

  createAccount(): void {
    this.route.navigateByUrl('/register-page');
  }

}
