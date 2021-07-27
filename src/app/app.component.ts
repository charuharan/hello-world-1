import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template:`
  <h2> welcome {{name}} </h2>
  <h2>{{5+6}}</h2>
  <h2>{{"Hi "+name}}</h2>
  <h3>{{name.length}}</h3>
  <h3>{{greet()}}</h3>
  <h4>{{siteurl}}</h4>
  <h2 [class]="success">{{name}}</h2>
  <input [disabled]="isdisabled" type="text" value="Charu">`
  ,
  styles:[`
  .text-success{
    color: green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style: italic;
  }`]
})
export class AppComponent {
  public name="charu";
  public isdisabled=true;
  public success="text-success";
  public special="text-special";
  public siteurl=window.location.href;
  greet(){
    return "Angular";
  }
  title = 'hello-world';
}
