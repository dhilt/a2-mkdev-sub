import {Component, Input} from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'courses',
  templateUrl: 'app/subscription/mentors_and_courses/courses.component.html'
})
export class CoursesComponent {
  @Input('courseList') courses: Course[];
}
