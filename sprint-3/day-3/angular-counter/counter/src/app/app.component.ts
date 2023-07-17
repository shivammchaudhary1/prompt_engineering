import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'counter';
  count = 0;
  counter() {
    this.count++;
  }
  decre() {
    this.count--;
  }
}
