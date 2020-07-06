import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forums-main',
  templateUrl: './forums-main.component.html',
  styleUrls: ['./forums-main.component.scss']
})
export class ForumsMainComponent implements OnInit, OnDestroy {

  chosenThread = 'Rules';
  threadList: any;
  threadNav: Subscription;

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.threadNav = this.dataretriever.getThreadNavRef().subscribe(threads => {
      this.threadList = threads;
    });
  }

  ngOnDestroy(): void {
    this.threadNav.unsubscribe();
  }

  choseThread(thread: string) {
    if (this.chosenThread === thread) {
      this.chosenThread = '/' + thread;
    } else {
      this.chosenThread = thread;
    }
  }

}
