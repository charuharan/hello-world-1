import { Component, ViewEncapsulation,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: /*`
    <app-no-encapsulation></app-no-encapsulation>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-shadow-dom-encapsulation></app-shadow-dom-encapsulation>
  `*/'./app.component.html',
  styleUrls: [
    /*'app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation { display: block; max-width: 500px; padding: 5px; margin: 5px 0; }',
    'app-no-encapsulation { border: solid 2px red; }',
    'app-emulated-encapsulation { border: solid 2px green; }',
    'app-shadow-dom-encapsulation { border: solid 2px blue; }',*/  
  ],
  /*encapsulation: ViewEncapsulation.None,*/
})
export class AppComponent { 
  n1="interaction";
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }
}


