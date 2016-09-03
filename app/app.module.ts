import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubscriptionModule } from './subscription/subscription.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, SubscriptionModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
