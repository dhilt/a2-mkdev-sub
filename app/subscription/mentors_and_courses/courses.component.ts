import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {Course} from './course';
import {Mentor} from './mentor';

@Component({
  selector: 'courses',
  templateUrl: 'app/subscription/mentors_and_courses/courses.component.html'
})
export class CoursesComponent {
  @Input('courseList') courses: Course[];
  @Input('selectedMentor') selectedMentor: Mentor;
  @Output('selectCourse') onCourseSelected = new EventEmitter();

  selectedCourse: Course;

  onSelect(course: Course): void {
    this.selectedCourse = course;
    this.onCourseSelected.emit(course);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['selectedMentor']) {
      this.onSelectedMentorChanged();
    }
  }

  private onSelectedMentorChanged(): void {
    if (this.selectedMentor && this.selectedCourse &&
      this.selectedMentor.courses.indexOf(this.selectedCourse.id) === -1) {
      this.selectedCourse = null;
    }
  }
}
