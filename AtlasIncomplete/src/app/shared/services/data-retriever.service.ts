import { Injectable } from '@angular/core';
import { CharactersModel } from '../models/characters-model';
import { NavigationModel } from '../models/navigation-model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private database: any;

  constructor(private db: AngularFireDatabase) {
    this.database = db.database;
  }

  getMainCharactersList(): AngularFireList<CharactersModel[]> {
    return this.db.list('/characters/Main');
  }

  getOtherCharactersList(): AngularFireList<CharactersModel[]> {
    return this.db.list('/characters/Other');
  }

  getMainNavRef(): AngularFireList<NavigationModel[]> {
    return this.db.list('/mainnavlink');
  }

  getThreadNavRef(): Observable<object[]> {
    return this.db.list('/posts').snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key })
        )
      )
    );
  }

  getThreadsRef(thread: string): Observable<any> {
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

  getPostKey(): string {
    return this.database.ref().child('posts').push().key;
  }

  updateDB(updates: object): Promise<any> {
    return this.database.ref().update(updates);
  }

  removeDB(path: string): Promise<any> {
    return this.database.ref().child(path).remove();
  }

  getUserDetails(user: string): Observable<any> {
    return this.db.list('user-posts/' + user).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          if (a.key === 'gold') {
            return a.payload.val();
          }
        });
      }));
  }

}
