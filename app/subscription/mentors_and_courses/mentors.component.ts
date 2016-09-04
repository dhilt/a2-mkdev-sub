import {Component, Input} from '@angular/core';
import {Mentor} from './mentor';

@Component({
  selector: 'mentors',
  templateUrl: 'app/subscription/mentors_and_courses/mentors.component.html'
})
export class MentorsComponent {
  @Input('mentorList') mentors: Mentor[];

  selectedMentor: Mentor;

  onSelect(mentor: Mentor): void {
    this.selectedMentor = mentor;
  }
}
