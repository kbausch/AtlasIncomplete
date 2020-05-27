import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnav-page',
  templateUrl: './mainnav-page.component.html',
  styleUrls: ['./mainnav-page.component.scss']
})
export class MainnavPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public navList: Object[]= [
    {title: 'Characters', routerlink: '/mainnav-page', image:'https://66.media.tumblr.com/4aadb561ee128380f81a50f857e5f38b/tumblr_phdlg4LwT81u4vhy0o1_r1_1280.png'},
    {title: 'Lore and Mechanics', routerlink: '/mainnav-page', image:'../../assets/scrolls-of-uncertain-provenance.png'},
    {title: 'About', routerlink: '/mainnav-page', image:'https://dragonflytraining.files.wordpress.com/2013/10/man-with-question-01.png'},
    {title: 'Watch', routerlink: '/mainnav-page', image:'https://image.flaticon.com/icons/png/512/48/48968.png'},
    {title: 'Sick Loot', routerlink: '/mainnav-page', image:'../../assets/776aee01f74dfd22f80c18109c3df1b2.png'},
    {title: 'Forums', routerlink: '/mainnav-page', image:'https://2.bp.blogspot.com/-ldPKjV8-KcQ/UCRaeanCN5I/AAAAAAAAAbE/JnxU9m4dJz4/s1600/Bar-Fight.jpg'}
  ];

}
