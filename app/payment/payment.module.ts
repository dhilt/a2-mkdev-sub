import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaymentComponent} from './payment.component';
import {HistoryComponent} from './history/history.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaymentComponent, HistoryComponent],
  exports: [PaymentComponent]
})

export class PaymentModule {
}