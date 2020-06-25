import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataRetrieverService } from 'src/app/shared/services/data-retriever.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profilePicker = false;
  user: firebase.User;
  gold: unknown;
  sub: Subscription;

  constructor(private route: Router, private afa: AngularFireAuth, private dataretriever: DataRetrieverService) {
    this.afa.user.subscribe((user: firebase.User) => {
      this.user = user;
      if (user !== null) {
        this.sub = this.dataretriever.getUserDetails(user.uid).subscribe(item => {
          this.gold = item.find(eachItem => {
            return eachItem !== undefined;
          });
        });
      } else {
        this.sub.unsubscribe();
      }
    });
  }

  ngOnInit(): void {
  }

  signOut() {
    this.route.navigateByUrl('/');
  }
}
