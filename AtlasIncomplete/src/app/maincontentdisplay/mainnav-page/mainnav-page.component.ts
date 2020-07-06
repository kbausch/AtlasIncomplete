import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../../shared/services/data-retriever.service';
import { CharactersModel } from 'src/app/shared/models/characters-model';

@Component({
  selector: 'app-mainnav-page',
  templateUrl: './mainnav-page.component.html',
  styleUrls: ['./mainnav-page.component.scss']
})
export class MainnavPageComponent implements OnInit {

  navList: CharactersModel[];

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getMainNavRef().query.once('value').then(result => this.navList = result.val());
  }

}
