import {Component, Input, SimpleChange, Output, EventEmitter} from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'courses',
  templateUrl: 'app/subscription/mentors_and_courses/courses.component.html'
})
export class CoursesComponent {
  @Input('courseList') courses: Course[];
  @Input('selectedMentorCourses') selectedMentorCourses: number[];
  @Output('selectCourse') onCourseSelected = new EventEmitter();

  selectedCourse: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.onCourseSelected.emit(course);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['selectedMentorCourses']) {
      this.onSelectedMentorCoursesChanged();
    }
  }

  private onSelectedMentorCoursesChanged(): void {
    if(!this.selectedCourse) {
      return;
    }
    if(this.selectedMentorCourses.indexOf(this.selectedCourse.id) === -1) {
      this.selectedCourse = null;
    }
  }
}
