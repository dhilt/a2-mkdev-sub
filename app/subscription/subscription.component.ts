import {Component} from '@angular/core';
import {Mentor} from './mentors_and_courses/mentor';
import {Course} from './mentors_and_courses/course';

@Component({
  selector: 'subscription',
  templateUrl: 'app/subscription/subscription.component.html'
})

export class SubscriptionComponent {
  public mentors: Mentor[];
  public courses: Course[];
}
