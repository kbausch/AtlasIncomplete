import { Component, OnChanges, Input } from '@angular/core';
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
export class ForumsPageComponent implements OnChanges {

  @Input('thread') thread: string;
  user: firebase.User;
  private database = firebase.database();
  private user$: Observable<firebase.User | null>;
  posts: Observable<any>;
  postText: string;
  closed: boolean;

  constructor(public afa: AngularFireAuth, public afd: AngularFireDatabase) { }

  ngOnChanges(): void {
    this.user$ = this.afa.user;
    this.user$.subscribe((user: firebase.User) => {
      this.user = user;
    });
    this.closed = false;
    this.posts = this.afd.list('/posts/' + this.thread).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          if (a.key === 'closed') {
            this.closed = true;
          }
          return {
            key: a.key,
            content: a.payload.toJSON()
          }
        });
      }));
  }

  writeNewPost() {
    // A post entry.
    var postData = {
      author: this.user.displayName,
      uid: this.user.uid,
      body: this.postText,
      title: this.user.displayName,
      starCount: 0,
      authorPic: this.user.photoURL
    };

    // Reset the post.
    this.postText = undefined;

    // Get a key for a new Post.
    let newPostKey = this.database.ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['/posts/' + this.thread + '/' + newPostKey] = postData;
    updates['/user-posts/' + this.user.uid + '/' + this.thread + '/' + newPostKey] = postData;

    return this.database.ref().update(updates);
  }

  deletePost(postKey: string) {
    this.database.ref().child('/posts/' + this.thread + '/' + postKey).remove();
    return this.database.ref().child('/user-posts/' + this.user.uid + '/' + this.thread + '/' + postKey).remove();
  }

}
