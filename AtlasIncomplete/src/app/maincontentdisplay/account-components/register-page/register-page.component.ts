import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registerSuccess() {
    console.log("Success");
    this.route.navigateByUrl('/mainnav-page');
  }

  printError(event) {
    console.log("Failure");
  }

  logIn(){
    this.route.navigateByUrl('/login-page');
  }

}
