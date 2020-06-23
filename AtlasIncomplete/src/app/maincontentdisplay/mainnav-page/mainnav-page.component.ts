import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../../shared/models/navigation-model';
import { DataRetrieverService } from '../../shared/services/data-retriever.service';

@Component({
  selector: 'app-mainnav-page',
  templateUrl: './mainnav-page.component.html',
  styleUrls: ['./mainnav-page.component.scss']
})
export class MainnavPageComponent implements OnInit {

  navList: NavigationModel[];

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.getNavList();
  }

  getNavList() {
    this.dataretriever.getMainNavRef().subscribe(navlinks => {
      this.navList = navlinks;
    });
  }

}
