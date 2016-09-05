import {Component, Input} from '@angular/core';
import {Card} from './card';

@Component({
  selector: 'payment',
  templateUrl: 'app/payment/payment.component.html'
})

export class PaymentComponent {
  @Input('price') price: number;

  card: Card = new Card('', '', '', '');
  cardTemp: Card = new Card('', '', '', '');
  isCardReady: boolean = false;

  cardNumberMask: any[] = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

  expiresMask(value: string): any[] {
    let result: Array<any> = [];
    result.push(/[01]/);
    if(value.length) {
      result.push(value[0] === '0' ? /\d/ : /[012]/);
    }
    else {
      return result;
    }
    result.push('/');
    result.push(/[2]/);
    result.push(/[0]/);
    result.push(/[123]/);
    if(value.length >= 7) {
      result.push(value[5] === '1' ? /[6789]/ : /\d/);
    }
    return result;
  }

  cardholderNameMask(value: string): any[] {
    let result: Array<any> = [];
    let max = value.length > 28 ? 28 : value.length;
    let isSpace = false;
    for(let i = 0; i < max; i++) {
      if(value[i] === ' ') {
        if(!isSpace) {
          isSpace = true;
          result.push(/\s/);
          continue;
        }
      }
      if(value[i].search( /[A-Z]/ ) !== -1) {
        result.push(/[A-Z]/);
      }
    }
    return result;
  }

  cvvMask: any[] = [/\d/, /\d/, /\d/];

  checkCard(value: string, key: string): void {
    if(key === 'number') {
      this.card.number = value && value.replace(/[^\d]+/g, '').length === 16 ? value : '';
    }
    if(key === 'name') {
      this.card.name = value && value.search(/[A-Z]+\ [A-Z]+/g, '') === 0 ? value : '';
    }
    if(key === 'expires') {
      this.card.expires = value && value.search(/\d\d\/\d\d\d\d/) === 0 ? value : '';
    }
    if(key === 'cvv') {
      this.card.cvv = value && value.search(/\d\d\d/) === 0 ? value : '';
    }
    this.isCardReady = !!(this.card.number && this.card.name && this.card.expires && this.card.cvv);
  }

  doPay(): void {
    if(!this.isCardReady) {
      return;
    }
    alert('Not implemented');
  }

}
