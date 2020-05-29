import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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
    console.log("Success");
    console.log(event);
    this.route.navigateByUrl('/mainnav-page');
  }

  printError(event) {
    console.log("Failure");
  }

  createAccount(){
    this.route.navigateByUrl('/register-page');
  }

}
