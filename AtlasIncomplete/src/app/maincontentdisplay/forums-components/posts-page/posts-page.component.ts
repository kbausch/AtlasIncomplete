import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnChanges {

  @Input('page') page: number;
  @Input('user') user: firebase.User;
  @Input('thread') threadMain: string;
  @Output('postNum') postNum = new EventEmitter<number>();

  posts: Observable<any>;
  postsSub: Subscription;
  closed: boolean;
  postText: string;

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnChanges(): void {
    this.posts = this.dataretriever.getThreadsRef(this.threadMain);
    this.postsSub = this.posts.subscribe(result => { this.postNum.emit(result.length - 3); });
  }
  
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

  testKey(key: string): boolean {
    if (key === 'closed') {
      this.closed = true;
    }
    return (key !== 'closed') && (key !== 'author') && (key !== 'authorPic') && (key !== 'uid');
  }

  writeNewPost() {
    // A post entry.
    const postData = {
      author: this.user.displayName,
      uid: this.user.uid,
      body: this.postText,
      title: this.user.displayName,
      starCount: 0,
      authorPic: this.user.photoURL,
      date: Date.now()
    };

    // Reset the post.
    this.postText = undefined;

    // Get a key for a new Post.
    const newPostKey = this.dataretriever.getPostKey();

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['/posts/' + this.threadMain + '/' + newPostKey] = postData;
    updates['/user-posts/' + this.user.uid + '/' + this.threadMain + '/' + newPostKey] = postData;

    return this.dataretriever.updateDB(updates);
  }

  deletePost(postKey: string) {
    this.dataretriever.removeDB('/posts/' + this.threadMain + '/' + postKey);
    return this.dataretriever.removeDB('/user-posts/' + this.user.uid + '/' + this.threadMain + '/' + postKey);
  }

  flagPost(post: object) {
    console.log(post);
  }

  addStar(post: any) {
    const updates = {};
    if (post.content.starVoters !== undefined) {
      if (Object.values(post.content.starVoters).indexOf(this.user.uid) > -1) {
        updates['/posts/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount - 1;
        updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount - 1;
        updates['/posts/' + this.threadMain + '/' + post.key + '/starVoters'] = Object.values(post.content.starVoters).filter(e => e !== this.user.uid);
        updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starVoters'] = Object.values(post.content.starVoters).filter(e => e !== this.user.uid);
        return this.dataretriever.updateDB(updates);
      } else {
        updates['/posts/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount + 1;
        updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount + 1;
        updates['/posts/' + this.threadMain + '/' + post.key + '/starVoters'] = post.content.starVoters.push(this.user.uid);
        updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starVoters'] = post.content.starVoters.push(this.user.uid);
        return this.dataretriever.updateDB(updates);
      }
    } else {
      updates['/posts/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount + 1;
      updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starCount'] = post.content.starCount + 1;
      updates['/posts/' + this.threadMain + '/' + post.key + '/starVoters'] = [this.user.uid];
      updates['/user-posts/' + post.content.uid + '/' + this.threadMain + '/' + post.key + '/starVoters'] = [this.user.uid];
      return this.dataretriever.updateDB(updates);
    }
  }

}
