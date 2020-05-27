import { Injectable } from '@angular/core';
import { CharactersModel } from '../models/characters-model';
import { NavigationModel } from '../models/navigation-model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  charactersRef: AngularFireList<CharactersModel> = null;

  constructor(private db: AngularFireDatabase) {
    this.charactersRef = db.list('/characters');
   }

   getCharactersList(): AngularFireList<CharactersModel> {
    return this.charactersRef;
  }

}
