import { BoughtTour } from './../../models/BoughtTour';
import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { ReservationsService } from '../../services/reservations.service';
import { Reservation } from '../../models/Reservation';
import { CommonModule } from '@angular/common';
import { Currency, CurrentCurrency } from '../../utils/constants';
import { MatButtonModule } from '@angular/material/button';
import { Tour } from '../../models/Tour';
import { ToursService } from '../../services/tours.service';
import { HistoryService } from '../../services/history.service';

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

  constructor(private service: ReservationsService, private toursService: ToursService, private historyService: HistoryService) { }

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

  buyTours() {
    var boughtTours: BoughtTour[] = [];
    for (let i = 0; i < this.cartItems.length; i++) {
      var b: BoughtTour = {
          id: '',
          tourId: this.cartItems[i].tourId,
          name: this.tours[i].name,
          description: this.tours[i].description,
          destination: this.tours[i].destination,
          price: this.tours[i].price,
          startDate: this.tours[i].startDate,
          endDate: this.tours[i].endDate,
          imageUrl: this.tours[i].imageUrl,
          reservedSpots: this.cartItems[i].reservedSpots,
          totalPrice: this.cartItems[i].totalPrice,
          boughtDate: new Date()
        }
      boughtTours.push(b);
      this.historyService.buyTour(b).subscribe();
      this.toursService.updateTourAvailableSpots(this.cartItems[i].tourId, this.tours[i].maxPeople - this.cartItems[i].reservedSpots).subscribe();

    }

    this.service.deleteAllReservations().subscribe().add(() => this.handleDeleteAllReservations());
  }

  handleDeleteAllReservations() {
    this.cartItems = [];
    this.tours = [];
    this.totalPrice = 0;
    window.location.reload();

  }
}
