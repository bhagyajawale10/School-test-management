import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
    <app-login></app-login>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
