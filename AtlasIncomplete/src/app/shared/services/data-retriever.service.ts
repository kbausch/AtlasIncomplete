import { Injectable } from '@angular/core';
import { CharactersModel } from '../models/characters-model';
import { NavigationModel } from '../models/navigation-model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private database = firebase.database();
  private charactersRef: AngularFireList<CharactersModel> = null;
  private mainNavRef: AngularFireList<NavigationModel> = null;
  closed: boolean;
  private user: firebase.User;

  constructor(private db: AngularFireDatabase, private afa: AngularFireAuth) {
    this.charactersRef = db.list('/characters');
    this.mainNavRef = db.list('/mainnavlink');
    this.afa.user.subscribe((user: firebase.User) => {
      this.user = user;
    });
  }

  getUser(): firebase.User {
    return this.user;
  }

  getCharactersList(): AngularFireList<CharactersModel> {
    return this.charactersRef;
  }

  getMainNavRef(): Observable<any> {
    return this.mainNavRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    );
  }

  getThreadNavRef(): AngularFireList<any> {
    return this.db.list('/posts');
  }

  getPostsRef(thread: string): Observable<any> {
    return this.db.list('/posts/' + thread).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          return {
            key: a.key,
            content: a.payload.val()
          };
        });
      }));
  }

  getSubThreadsNavRef(thread: string): Observable<any> {
    return this.db.list('/posts/' + thread).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          return a.key;
        });
      }));
  }

  getPostKey(): string {
    return this.database.ref().child('posts').push().key;
  }

  updateDB(updates: object): Promise<any> {
    return this.database.ref().update(updates);
  }

  removeDB(path: string): Promise<any> {
    return this.database.ref().child(path).remove();
  }

}
