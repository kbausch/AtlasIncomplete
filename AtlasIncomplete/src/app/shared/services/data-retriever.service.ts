import { Injectable } from '@angular/core';
import { CharactersModel } from '../models/characters-model';
import { NavigationModel } from '../models/navigation-model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  private charactersRef: AngularFireList<CharactersModel> = null;
  private mainNavRef: AngularFireList<NavigationModel> = null;

  constructor(private db: AngularFireDatabase) {
    this.charactersRef = db.list('/characters');
    this.mainNavRef = db.list('/mainnavlink');
  }

  getCharactersList(): AngularFireList<CharactersModel> {
    return this.charactersRef;
  }

  getMainNavRef(): AngularFireList<NavigationModel> {
    return this.mainNavRef;
  }

  getLoreNavRef(): AngularFireList<NavigationModel> {
    return this.db.list('/lorenavlink');
  }

}
