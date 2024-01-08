import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/Reservation';
import { Currency, CurrentCurrency } from '../../utils/constants';
import { ReservationsService } from '../../services/reservations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-widget.component.html',
  styleUrl: './cart-widget.component.scss'
})

export class CartWidgetComponent implements OnInit{
  currency: Currency = CurrentCurrency;
  totalPrice: number = 0;
  count: number = 0;

  constructor(private service: ReservationsService) { }

  ngOnInit() {
    this.service.getReservations('admin').subscribe(reservations => this.handleGetCartItems(reservations));
  }

  handleGetCartItems(list: Reservation[]) {
    list.forEach(reservation => {
      this.totalPrice += reservation.totalPrice;
      this.count += reservation.reservedSpots;
    });
  }
}
