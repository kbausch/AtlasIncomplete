import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forums-main',
  templateUrl: './forums-main.component.html',
  styleUrls: ['./forums-main.component.scss']
})
export class ForumsMainComponent implements OnInit {

  chosenThread= 'Rules';
  threadList:any;

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getThreadNavRef().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key })
        )
      )
    ).subscribe(threads => {
      this.threadList = threads;
    });
  }

}
