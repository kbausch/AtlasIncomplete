import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../../../shared/services/data-retriever.service';

@Component({
  selector: 'app-forums-main',
  templateUrl: './forums-main.component.html',
  styleUrls: ['./forums-main.component.scss']
})
export class ForumsMainComponent implements OnInit {

  chosenThread = 'Rules';
  threadList: any;

  constructor(private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
    this.dataretriever.getThreadNavRef().subscribe(threads => {
      this.threadList = threads;
    });
  }

  choseThread(thread: string) {
    if (this.chosenThread === thread) {
      this.chosenThread = '/' + thread;
    } else {
      this.chosenThread = thread;
    }
  }

}
