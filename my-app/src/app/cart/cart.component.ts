import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/Reservation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartItems: Reservation[] = [];
  constructor(private service: ReservationsService) { }

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    return this.service.getReservations('admin').subscribe(reservations => this.cartItems = reservations);
  }
}
