import { Component } from '@angular/core';
import { Currency, Currencies, CurrentCurrency } from "../utils/constants";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
  new_currency = "PLN";
  currency: Currency = CurrentCurrency;
  currencies: Currency[] = Currencies;

  mapOptions: google.maps.MapOptions = {
    center: {lat: 52.25, lng: 20.99},
    zoom: 12,
  };

  updateCurrency() {
    var c = this.currencies.find(c => this.new_currency == c.name);
    if (c) {
      this.currency = c;
      CurrentCurrency.name = c.name;
      CurrentCurrency.multiplier = c.multiplier;
      console.log("Currency: " + this.currency.name + " " + this.currency.multiplier);
    }
  }
}
