import { ReservationsService } from './../../services/reservations.service';
import { Currency } from './../../utils/constants';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Tour } from '../../models/Tour';
import { ToursService } from '../../services/tours.service';
import { Reservation } from './../../models/Reservation';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservedSpots } from '../../models/ReservedSpots';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink, CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit{
  @Input() reservation: Reservation = {
    id: '',
    userId: '',
    tourId: '',
    totalPrice: 0,   
    reservedSpots: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  @Input() currency: Currency = {
    name: '',
    multiplier: 1
  };

  tour: Tour = {
    id: '',
    name: '',
    description: '',
    destination: '',
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    maxPeople: 0,
    imageUrl: ''
  }

  reervationsInfo: ReservedSpots = {
    id: '',
    tourId: '',
    reservedSpots: 0
  };

  availableSpots: number = 0;
  counter: number = 0;
  deleted: boolean = false;

  constructor(private service: ToursService, private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.service.getTour(this.reservation.tourId).subscribe(tour => this.handleInit(tour));
  }

  handleInit(tour: Tour) {
    this.tour = tour;
    this.counter = this.reservation.reservedSpots;
    this.service.getTourReservedSpots(tour.id).subscribe(reservedSpots => this.handleReservedSpots(reservedSpots[0]));
  }

  handleReservedSpots(reservedSpots: ReservedSpots) {
    this.reervationsInfo.reservedSpots = reservedSpots.reservedSpots;
    this.reervationsInfo.id = reservedSpots.id
    this.reervationsInfo.tourId = this.tour.id;
    this.availableSpots = this.tour.maxPeople - reservedSpots.reservedSpots;
  }

  addToCart() {
    if (this.availableSpots > 0) {
      this.counter += 1;
      this.reervationsInfo.reservedSpots += 1;
      this.reservation.reservedSpots += 1;
      this.availableSpots -= 1;
      this.reservation.totalPrice = this.counter * this.tour.price;
      // this.service.updateReservedSpots(this.reervationsInfo);
    }
  }

  removeFromCart() {
    if (this.counter > 1) {
      this.counter -= 1;
      this.reervationsInfo.reservedSpots -= 1;
      this.reservation.reservedSpots -= 1;
      this.availableSpots += 1;
      this.reservation.totalPrice = this.counter * this.tour.price;
      // this.service.updateReservedSpots(this.reervationsInfo);
    }
  }

  updateReservation() {
    this.reservationsService.updateReservation(this.reservation).subscribe(_ => this.handleUpdate());
    window.location.reload();
  }

  handleUpdate() {
    console.log(this.reservation);
    console.log('updated');
    // window.location.reload();
  }

  deleteReservation() {
    this.reservationsService.deleteReservation(this.reservation).subscribe(_ => this.handleDelete());
  }

  handleDelete() {
    this.deleted = true;
    window.location.reload();
  }


}
