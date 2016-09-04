import {Component, OnInit} from '@angular/core';
import {Mentor} from './mentors_and_courses/mentor';
import {MentorService} from './mentors_and_courses/mentor.service';
import {Course} from './mentors_and_courses/course';
import {CourseService} from './mentors_and_courses/course.service';

@Component({
  selector: 'subscription',
  templateUrl: 'app/subscription/subscription.component.html'
})

export class SubscriptionComponent implements OnInit {

  public mentors: Mentor[];
  public courses: Course[];

  constructor(private mentorService: MentorService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.mentorService.getMentors().then(result => this.mentors = result);
    this.courseService.getCourses().then(result => this.courses = result);
  }
}
