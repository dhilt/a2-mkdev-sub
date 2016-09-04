import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {Mentor} from './mentor';
import {Course} from './course';

@Component({
  selector: 'mentors',
  templateUrl: 'app/subscription/mentors_and_courses/mentors.component.html'
})
export class MentorsComponent {
  @Input('mentorList') mentors: Mentor[];
  @Input('selectedCourse') selectedCourse: Course;
  @Output('selectMentor') mentorSelected = new EventEmitter();

  selectedMentor: Mentor;

  onSelect(mentor: Mentor): void {
    this.selectedMentor = mentor;
    this.mentorSelected.emit(mentor);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['selectedCourse']) {
      this.onSelectedCourseChanged();
    }
  }

  private onSelectedCourseChanged(): void {
    if (this.selectedMentor && this.selectedCourse &&
      this.selectedMentor.courses.indexOf(this.selectedCourse.id) === -1) {
      this.selectedMentor = null;
    }
  }
}
