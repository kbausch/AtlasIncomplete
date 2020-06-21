import { Component, OnChanges, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';

@Component({
  selector: 'app-forums-page',
  templateUrl: './forums-page.component.html',
  styleUrls: ['./forums-page.component.scss']
})
export class ForumsPageComponent implements OnChanges {

  @Input('thread') threadMain : string;
  user: firebase.User;
  posts: boolean;
  subThreads: Observable<any>;
  subThreadName: string;

  //The numbers below are used for the pagination
  postNum: number;
  page: number = 1;

  constructor(public afa: AngularFireAuth, private dataretriever: DataRetrieverService) {
    this.afa.user.subscribe((user: firebase.User) => {
      this.user = user;
    });
  }

  ngOnChanges(): void {
    console.log(this.threadMain);
    this.postNum = 0;
    this.posts = false;
    this.subThreads = this.dataretriever.getSubThreadsNavRef(this.threadMain);
    this.subThreads.subscribe(result => { if (this.posts === false) { this.postNum = result.length; } });
  }

  selectSubThread(subThread: string) {
    this.threadMain += '/' + subThread;
    this.posts = true;
  }

  createSubThread(): Promise<any> {
    // A post entry.
    let postData = {
      author: this.user.displayName,
      uid: this.user.uid,
      authorPic: this.user.photoURL
    };

    // Write the new post's data simultaneously in the posts list and the user's post list.
    let updates = {};
    updates['/posts/' + this.threadMain + '/' + this.subThreadName] = postData;
    updates['/user-posts/' + this.user.uid + '/' + this.threadMain + '/' + this.subThreadName] = postData;

    // Reset the post.
    this.subThreadName = undefined;

    return this.dataretriever.updateDB(updates);
  }
}
