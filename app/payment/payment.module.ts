import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import MaskedInput from 'angular2-text-mask';

import {PaymentComponent} from './payment.component';
import {HistoryComponent} from './history/history.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MaskedInput, PaymentComponent, HistoryComponent],
  exports: [PaymentComponent]
})

export class PaymentModule {
}
