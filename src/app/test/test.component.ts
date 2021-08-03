import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls:['./test.component.css'],
})
export class TestComponent {
name="interpolation";
name2="two-way binding";
name3="pipes";
text="id1";
successclass="text-success";
haserror=true;
isspecial=true;
displayname=true;
greeting="";
color1="blue";
date=new Date();
object={
  "text-success":!this.haserror,
  "text-danger":this.haserror,
  "text-special":this.isspecial
}
colors={
  color:"pink",
  fontStyle:"italic"
}
onClick(){
  this.greeting="welcome"
}
message(value: string){
  console.log(value);
}
arr=['red','yellow','green','orange'];

}
