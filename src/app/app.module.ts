import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
/*import { NoEncapsulationComponent } from './no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './shadow-dom-encapsulation.component';
import { EmulatedEncapsulationComponent } from './emulated-encapsulation.component';*/
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    /*NoEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    EmulatedEncapsulationComponent*/
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
