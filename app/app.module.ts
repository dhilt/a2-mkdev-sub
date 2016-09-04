import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubscriptionModule } from './subscription/subscription.module';
import { PaymentModule } from './payment/payment.module';

import { AppComponent }  from './app.component';
import { MentorService } from './subscription/mentors_and_courses/mentor.service';
import { CourseService } from './subscription/mentors_and_courses/course.service';

@NgModule({
  imports: [ BrowserModule, SubscriptionModule, PaymentModule ],
  declarations: [ AppComponent ],
  providers: [ MentorService, CourseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
