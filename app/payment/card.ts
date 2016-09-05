export class Card {
  number: string;
  expires: string;
  name: string;
  cvv: string;

  constructor(number: string, expires: string, name: string, cvv: string) {
    this.number = number;
    this.expires = expires;
    this.name = name;
    this.cvv = cvv;
  }
}
