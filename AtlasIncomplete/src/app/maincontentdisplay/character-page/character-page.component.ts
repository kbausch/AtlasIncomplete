import { Component, OnInit } from '@angular/core';
import { CharactersModel } from '../../shared/models/characters-model';
import { DataRetrieverService } from '../../shared/services/data-retriever.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  characterList: CharactersModel[];

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getMainCharactersList().query.once('value').then(result => this.characterList = result.val());
  }

}
