import {Course} from './course';
import {Injectable} from '@angular/core';

@Injectable()
export class CourseService {

  // this is just a mock
  courses: Course[] = [
    new Course(1, 'Course #1'),
    new Course(2, 'Course #2'),
    new Course(3, 'Course #3')
  ];

  // a request to remote should be here
  getCourses(): Promise<Course[]> {
    return Promise.resolve(this.courses);
  }

  getCourse(id: number): Promise<Course> {
    return Promise.resolve(this.courses.find(course => course.id === id));
  }
}
