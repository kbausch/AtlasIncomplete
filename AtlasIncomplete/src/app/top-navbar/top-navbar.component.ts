import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  getVerification(){
    if(sessionStorage.getItem('verified') !== null){
      return (sessionStorage.getItem('verified') === 'true');
    }else{
      return false;
    }
  }

  signOut(){
    sessionStorage.setItem('verified', 'false');
  }

}
