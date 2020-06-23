import { Injectable } from '@angular/core';
import { CharactersModel } from '../models/characters-model';
import { NavigationModel } from '../models/navigation-model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private database = firebase.database();
  private mainNavRef: AngularFireList<NavigationModel> = null;
  closed: boolean;

  constructor(private db: AngularFireDatabase) {
    this.mainNavRef = db.list('/mainnavlink');
  }

  getMainCharactersList(): AngularFireList<CharactersModel> {
    return this.db.list('/characters/Main');
  }

  getOtherCharactersList(): AngularFireList<any> {
    return this.db.list('/characters/Other');
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
