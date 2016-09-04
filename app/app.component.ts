import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

  public price: number;

  onPriceSet(price: number) {
    this.price = price;
  }

}
