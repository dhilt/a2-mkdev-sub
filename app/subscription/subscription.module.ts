import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SubscriptionComponent} from './subscription.component';
import {MentorsComponent} from './mentors_and_courses/mentors.component';
import {CoursesComponent} from './mentors_and_courses/courses.component';
import {DurationComponent} from './duration/duration.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SubscriptionComponent, MentorsComponent, CoursesComponent, DurationComponent],
  exports: [SubscriptionComponent]
})

export class SubscriptionModule {
}
