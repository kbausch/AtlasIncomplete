import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataRetrieverService } from 'src/app/shared/services/data-retriever.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  constructor(private route: Router, private dataretriever: DataRetrieverService) {
  }

  ngOnInit(): void {
  }

  registerSuccess(event: firebase.User) {
    event.updateProfile(
      { photoURL: 'https://cdn.discordapp.com/attachments/467185767593148418/725491929713999882/Character_Study.png' }
    ).finally(() => {
      const updates = {};
      updates['/user-posts/' + event.uid] = { gold: 10 };
      this.dataretriever.updateDB(updates);
      this.route.navigateByUrl('/mainnav-page');
    });
  }

  logIn() {
    this.route.navigateByUrl('/login-page');
    this.route.dispose();
  }

}
