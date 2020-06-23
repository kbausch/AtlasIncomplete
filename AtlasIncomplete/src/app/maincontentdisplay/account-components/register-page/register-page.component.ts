import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataRetrieverService } from 'src/app/shared/services/data-retriever.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private route: Router, private dataretriever: DataRetrieverService) { }

  ngOnInit(): void {
  }

  registerSuccess() {
    this.dataretriever.getUser().updateProfile(
      {photoURL: 'https://cdn.discordapp.com/attachments/467185767593148418/724806635188650074/unknown.png'}
      ).finally(() =>
        this.route.navigateByUrl('/mainnav-page')
      );
  }

  logIn(){
    this.route.navigateByUrl('/login-page');
  }

}
