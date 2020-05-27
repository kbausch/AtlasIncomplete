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
    {title: 'Lore and Mechanics', routerlink: '/mainnav-page'},
    {title: 'About', routerlink: '/mainnav-page'},
    {title: 'Watch', routerlink: '/mainnav-page'},
    {title: 'Sick Loot', routerlink: '/mainnav-page'},
    {title: 'Forums', routerlink: '/mainnav-page'}
  ];

}
