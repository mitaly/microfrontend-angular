import { Component } from '@angular/core';
import { User } from 'models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microfrontend';
  user: User;

  constructor() {
    this.user = {name: "mitaly"};
  }
}
