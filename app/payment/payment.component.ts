import {Component, Input} from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: 'app/payment/payment.component.html'
})

export class PaymentComponent {
  @Input('price') price: number;

  public cardNumber: string;
  public expires: string;
  public cardholderName: string;
  public cvv: string;

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
    console.log(value);
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

}
