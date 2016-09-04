import {Component, Input} from '@angular/core';
import {Mentor} from './mentor';
import {MentorService} from './mentor.service';

@Component({
  selector: 'mentors',
  templateUrl: 'app/subscription/mentors_and_courses/mentors.component.html'
})
export class MentorsComponent {
  @Input('mentorList') mentors: Mentor[];

  constructor(private mentorService: MentorService) {
  }

  selectedMentor: Mentor;

  onSelect(mentor: Mentor): void {
    this.selectedMentor = mentor;
    this.mentorService.selectMentor(mentor);
  }
}
