import { Component, Input, OnInit } from '@angular/core';
import { DataRetrieverService } from 'src/app/shared/services/data-retriever.service';
import { CharactersModel } from 'src/app/shared/models/characters-model';

@Component({
  selector: 'app-profile-pic-page',
  templateUrl: './profile-pic-page.component.html',
  styleUrls: ['./profile-pic-page.component.scss']
})
export class ProfilePicPageComponent implements OnInit {

  @Input('user') user: firebase.User;
  mainCharacterList: CharactersModel[];
  otherCharacterList: any[];


  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getMainCharactersList().subscribe((characters: CharactersModel[]) => this.mainCharacterList = characters);
    this.dataretriever.getOtherCharactersList().subscribe(characters => this.otherCharacterList = characters);
  }

  updateProfPic(url: string) {
    this.user.updateProfile(
      { photoURL: url }
    );
  }

}
