import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  public characterList: Object[]= [
    {title: 'Brock', image:'https://image.flaticon.com/icons/png/512/48/48968.png', race: 'Dwarf', age:'??', aspect:'Null', health:'25', 
      summery:'asjdnflk adsf dsf adof jcvkl jeoa deic k jk cjk kc jij kcjk ijcij kacjk kjkakj kckj lajci kc jiajkc jkajicj kajkjk jcii iajici iiaj h blah blah aiwhoef  asdhlkfh a eiafi aslkd fkal f'},
    {title: 'Dusk', image:'https://dragonflytraining.files.wordpress.com/2013/10/man-with-question-01.png', race: 'Half-elf', age:'??', aspect:'Whisper', health:'13', 
      summery:'asjdnflk adsf dsf adof jcvkl jeoa deic k jk cjk kc jij kcjk ijcij kacjk kjkakj kckj lajci kc jiajkc jkajicj kajkjk jcii iajici iiaj h blah blah aiwhoef  asdhlkfh a eiafi aslkd fkal f'},
    {title: 'Grant', image:'https://media.discordapp.net/attachments/711730603065868338/713139361356447814/SPOILER_unknown.png?width=879&height=672', race: 'Human', age:'26', aspect:'Terran', health:'13', 
      summery:'asjdnflk adsf dsf adof jcvkl jeoa deic k jk cjk kc jij kcjk ijcij kacjk kjkakj kckj lajci kc jiajkc jkajicj kajkjk jcii iajici iiaj h blah blah aiwhoef  asdhlkfh a eiafi aslkd fkal f'},
    {title: 'Kizuila', image:'../../assets/scrolls-of-uncertain-provenance.png', race: 'Aarakocra', age:'35', aspect:'Arc-Light', health:'14', 
      summery:'asjdnflk adsf dsf adof jcvkl jeoa deic k jk cjk kc jij kcjk ijcij kacjk kjkakj kckj lajci kc jiajkc jkajicj kajkjk jcii iajici iiaj h blah blah aiwhoef  asdhlkfh a eiafi aslkd fkal f'},
    {title: 'Yor', image:'../../assets/776aee01f74dfd22f80c18109c3df1b2.png', race: 'High-Fae', age:'38', aspect:'Arbiter', health:'20', 
      summery:'asjdnflk adsf dsf adof jcvkl jeoa deic k jk cjk kc jij kcjk ijcij kacjk kjkakj kckj lajci kc jiajkc jkajicj kajkjk jcii iajici iiaj h blah blah aiwhoef  asdhlkfh a eiafi aslkd fkal f'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
