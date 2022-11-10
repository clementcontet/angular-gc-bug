import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-gc-bug';
  items: number[] = [];

  reloadItems() {
    this.items = new Array(2000).fill('').map(() => Math.random());
  }
}
