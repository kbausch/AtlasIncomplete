import { Component, OnInit } from '@angular/core';
import { NavigationModel } from '../../shared/models/navigation-model';
import { DataRetrieverService } from '../../shared/services/data-retriever.service';
import { map } from 'rxjs/operators';

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
    this.dataretriever.getMainNavRef().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(navlinks => {
      this.navList = navlinks;
    });
  }

  getLoreNavList() {
    this.dataretriever.getLoreNavRef().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(navlinks => {
      this.navList = navlinks;
    });
  }

}
