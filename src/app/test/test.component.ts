import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2> welcome {{name}} </h2>
  <h2>{{siteurl}}</h2>`
  ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name="charu";
  public siteurl=window.location.href;
  constructor() { }
  ngOnInit(): void {
  }
}
