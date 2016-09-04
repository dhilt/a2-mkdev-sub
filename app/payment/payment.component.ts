import {Component, Input} from '@angular/core';

@Component({
  selector: 'payment',
  templateUrl: 'app/payment/payment.component.html'
})

export class PaymentComponent {
  @Input('price') price: number;
}
