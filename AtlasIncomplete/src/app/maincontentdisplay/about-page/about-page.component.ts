import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  text1 = 'URealms Live is a massive fantasy universe and improv comedy show built around a custom tabletop roleplaying game similar to D&D or Pathfinder.';
  text2 = 'What sets URealms apart from other roleplaying games? In URealms, it is less about individual characters on never ending adventures, and more about many small intertwined stories and histories. Every show, the players create four new characters to add to an ever growing and expanding universe of funny and serious stories.';
  text3 = 'URealms, both the show and game, are completely free to anyone interested in watching and playing. The entire project is supported primarily from live show donations, merchandise, and Patreon.';
  text4 = 'If you are looking for a small community of gamers and roleplayers, you can also join our forums to talk about the show, submit your own custom cards or characters, host or join community games, or just hang out and make new friends!';

  constructor() { }

  ngOnInit(): void {
  }

}
