import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.scss']
})
export class ForumsPageComponent implements OnInit {

  user: firebase.User;
  private user$: Observable<firebase.User | null>;
  posts: Observable<any>;

  constructor(public afa: AngularFireAuth, public afd: AngularFireDatabase) {
  }

  ngOnInit(): void {
    this.user$ = this.afa.user;
    this.user$.subscribe((user: firebase.User) => {
      this.user = user;
    });
    this.posts = this.afd.list('/posts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          return a.payload.toJSON();
        });
      }));
  }

  writeNewPost(title, body) {
    // A post entry.
    var postData = {
      author: this.user.displayName,
      uid: this.user.uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: this.user.photoURL
    };

    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + this.user.uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

}
