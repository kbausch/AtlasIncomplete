import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loremechnav-page',
  templateUrl: './loremechnav-page.component.html',
  styleUrls: ['./loremechnav-page.component.scss']
})
export class LoremechnavPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public navList: Object[]= [
    {title: 'Gods', routerlink: '', image:'https://wiki.guildwars.com/images/thumb/6/67/Gods_of_Tyria_Avatars.png/375px-Gods_of_Tyria_Avatars.png'},
    {title: 'Aspects', routerlink: '', image:'https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png'},
    {title: 'History and Timeline', routerlink: '', image:'https://www.otherworldlyincantations.com/wp-content/uploads/book-1769625_1920-e1537875389884.png'},
    {title: 'Artificer', routerlink: '', image:'https://i0.wp.com/nerdarchy.com/wp-content/uploads/2020/01/artificer-battlesmith.png?fit=741%2C1000&ssl=1'},
    {title: 'Maps', routerlink: '', image:'../../assets/31321724-old-map-background.jpg'},
    {title: 'Credits', routerlink: '/about-page', image:'https://dragonflytraining.files.wordpress.com/2013/10/man-with-question-01.png'}
  ];
}
