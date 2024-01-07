import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/Reservation';
import { CommonModule } from '@angular/common';
import { Currency, CurrentCurrency } from '../../utils/constants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartItems: Reservation[] = [];
  currency: Currency = CurrentCurrency;
  totalPrice: number = 0;

  constructor(private service: ReservationsService) { 
  }

  ngOnInit() {
    this.service.getReservations('admin').subscribe(reservations => this.handleGetCartItems(reservations));
  }

  handleGetCartItems(list: Reservation[]) {
    list.forEach(reservation => {
      this.totalPrice += reservation.totalPrice;
    });
    this.cartItems = list;
  
  }
}
