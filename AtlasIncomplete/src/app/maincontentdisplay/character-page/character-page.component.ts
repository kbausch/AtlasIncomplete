import { Component, OnInit } from '@angular/core';
import { CharactersModel } from '../../shared/models/characters-model';
import { DataRetrieverService } from '../../shared/services/data-retriever.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characterList: CharactersModel[];

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.getCharacterList();
  }

  getCharacterList() {
    this.dataretriever.getMainCharactersList().valueChanges().subscribe(characters => {
      this.characterList = characters;
    });
  }

}
