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
  otherCharacterList: CharactersModel[];


  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getMainCharactersList().query.once('value').then(result => this.mainCharacterList = result.val());
    this.dataretriever.getOtherCharactersList().query.once('value').then(result => this.otherCharacterList = result.val());
  }

  updateProfPic(url: string) {
    this.user.updateProfile(
      { photoURL: url }
    );
  }

}
