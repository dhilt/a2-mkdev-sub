import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Mentor} from './mentor';

@Component({
  selector: 'mentors',
  templateUrl: 'app/subscription/mentors_and_courses/mentors.component.html'
})
export class MentorsComponent {
  @Input('mentorList') mentors: Mentor[];
  @Output('mentorSelected') mentorSelected = new EventEmitter();

  selectedMentor: Mentor;

  onSelect(mentor: Mentor): void {
    this.selectedMentor = mentor;
    this.mentorSelected.emit(mentor);
  }
}
