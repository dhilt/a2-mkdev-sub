export class Mentor {
  id: number;
  name: string;
  fee: number;
  courses: number[];

  constructor(id: number, name: string, fee: number, courses: number[]) {
    this.id = id;
    this.name = name;
    this.fee = fee;
    this.courses = courses;
  }
}
