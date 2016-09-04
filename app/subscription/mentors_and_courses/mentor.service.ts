import {Mentor} from './mentor';
import {Injectable} from '@angular/core';

@Injectable()
export class MentorService {

  // this is just a mock
  mentors: Mentor[] = [
    new Mentor(1, 'Person #1', 33, [1]),
    new Mentor(2, 'Person #2', 40, []),
    new Mentor(3, 'Person #3', 33, [1, 2]),
    new Mentor(4, 'Person #4', 70, [3]),
    new Mentor(5, 'Person #5', 40, [1, 4])
  ];

  selected: Mentor;

  // a request to remote should be here
  getMentors(): Promise<Mentor[]> {
    return Promise.resolve(this.mentors);
  }

  getMentor(id: number): Promise<Mentor> {
    return Promise.resolve(this.mentors.find(mentor => mentor.id === id));
  }

  selectMentor(mentor: Mentor) {
    this.selected = mentor;
  }

  getSelectMentor(): Mentor {
    return this.selected || null;
  }
}
