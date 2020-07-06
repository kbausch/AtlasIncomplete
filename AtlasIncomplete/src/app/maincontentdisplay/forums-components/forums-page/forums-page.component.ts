import { Component, OnChanges, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.scss']
})
export class ForumsPageComponent implements OnChanges, OnDestroy {

  @Input('thread') thread: string;
  user: firebase.User;
  posts: boolean;
  subThreads: Observable<any>;
  subThreadSub: Subscription;
  subThreadsList: string[];
  subThreadName: string;
  showToast = false;

  // The numbers below are used for the pagination
  postNum: number;
  page = 1;

  constructor(private dataretriever: DataRetrieverService, private afa: AngularFireAuth) {
    this.afa.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnChanges(): void {
    this.postNum = 0;
    this.posts = false;
    this.subThreads = this.dataretriever.getThreadsRef(this.thread);
    this.subThreadSub = this.subThreads.subscribe(result => {
      if (this.posts === false) {
        this.postNum = result.length;
      }
      this.subThreadsList = [];
      result.forEach(element => {
        this.subThreadsList.push(element.key);
      });
    });
  }

  ngOnDestroy(): void {
    this.subThreadSub.unsubscribe();
  }

  selectSubThread(subThread: string) {
    this.thread += '/' + subThread;
    this.posts = true;
  }

  createSubThread() {
    // Check to make sure the thread doesn't exist already.
    if (this.subThreadsList.includes(this.subThreadName)) {
      // Display error.
      this.showToast = true;
    } else {
      // A post entry.
      const postData = {
        author: this.user.displayName,
        uid: this.user.uid,
        authorPic: this.user.photoURL
      };

      // Write the new post's data simultaneously in the posts list and the user's post list.
      const updates = {};
      updates['/posts/' + this.thread + '/' + this.subThreadName] = postData;
      updates['/user-posts/' + this.user.uid + '/' + this.thread + '/' + this.subThreadName] = postData;

      // Reset the post.
      this.subThreadName = undefined;

      return this.dataretriever.updateDB(updates);
    }
  }

  deleteSubThread(subThread: string) {
    this.dataretriever.removeDB('/posts/' + this.thread + '/' + subThread);
    return this.dataretriever.removeDB('/user-posts/' + this.user.uid + '/' + this.thread + '/' + subThread);
  }
}
