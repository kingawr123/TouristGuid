import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/Reservation';
import { CommonModule } from '@angular/common';
import { Currency, CurrentCurrency } from '../../utils/constants';
import { MatButtonModule } from '@angular/material/button';
import { Tour } from '../../models/Tour';
import { ToursService } from '../../services/tours.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartItems: Reservation[] = [];
  tours: Tour[] = [];
  currency: Currency = CurrentCurrency;
  totalPrice: number = 0;

  constructor(private service: ReservationsService, private toursService: ToursService) { }

  ngOnInit() {
    this.service.getReservations('admin').subscribe(reservations => this.handleGetCartItems(reservations));
  }

  handleGetCartItems(list: Reservation[]) {
    list.forEach(reservation => {
      this.totalPrice += reservation.totalPrice;
    });
    this.cartItems = list;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.toursService.getTour(this.cartItems[i].tourId).subscribe(tour => this.handleGetTour(tour));
    }
  }

  handleGetTour(tour: Tour) {
    this.tours.push(tour);
  }
}
