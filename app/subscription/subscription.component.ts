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
  public selectedMentor: Mentor;
  public selectedCourse: Course;

  constructor(private mentorService: MentorService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.mentorService.getMentors().then(result => this.mentors = result);
    this.courseService.getCourses().then(result => this.courses = result);
  }

  testSelectedModelsCross(): boolean {
    return this.selectedMentor && this.selectedCourse &&
      this.selectedMentor.courses.indexOf(this.selectedCourse.id) === -1;
  }

  onMentorSelected(mentor: Mentor): void {
    this.selectedMentor = mentor;
    if(this.testSelectedModelsCross()) {
      this.selectedCourse = null;
    }
  }

  onCourseSelected(course: Course): void {
    this.selectedCourse = course;
    if(this.testSelectedModelsCross()) {
      this.selectedMentor = null;
    }
  }
}
