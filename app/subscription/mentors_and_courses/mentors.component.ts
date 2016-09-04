import {Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';
import {Mentor} from './mentor';

@Component({
  selector: 'mentors',
  templateUrl: 'app/subscription/mentors_and_courses/mentors.component.html'
})
export class MentorsComponent {
  @Input('mentorList') mentors: Mentor[];
  @Input('selectedCourseId') selectedCourseId: number;
  @Output('selectMentor') mentorSelected = new EventEmitter();

  selectedMentor: Mentor;

  onSelect(mentor: Mentor): void {
    this.selectedMentor = mentor;
    this.mentorSelected.emit(mentor);
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    if (changes['selectedCourseId']) {
      this.onSelectedCourseIdChanged();
    }
  }

  private onSelectedCourseIdChanged(): void {
    if(!this.selectedMentor) {
      return;
    }
    if(this.selectedMentor.courses.indexOf(this.selectedCourseId) === -1) {
      this.selectedMentor = null;
    }
  }
}
