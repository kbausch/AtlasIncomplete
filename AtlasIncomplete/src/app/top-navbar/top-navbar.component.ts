import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkMenuItem } from 'ngx-auth-firebaseui';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  links: LinkMenuItem[];
  user: User;
  private user$: Observable<User | null>;

  constructor(private afa: AngularFireAuth, private route: Router) { }

  ngOnInit(): void {
    this.links = [
      { icon: 'home', text: 'Profile', callback: this.goProfile.bind(this) }
    ];
    this.user$ = this.afa.user;
    this.user$.subscribe((user: User) => {
      this.user = user;
    });
  }

  private goProfile() {
    this.route.navigateByUrl('/profile-page');
  }

  signOut() {
    this.route.navigateByUrl('/');
  }

}
