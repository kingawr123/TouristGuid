import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Tour } from '../../models/Tour';
import { ToursService } from '../../services/tours.service';
import { Reservation } from './../../models/Reservation';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReservationsService } from '../../services/reservations.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterLink],
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

  tour: Tour = {
    id: '',
    name: '',
    description: '',
    destination: '',
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    maxPeople: 0,
    freeSpots: 0,
    imageUrl: ''
  }

  totalReservedSpots: number = 0;
  availableSpots: number = 0;

  constructor(private service: ToursService, private resService: ReservationsService) { }

  ngOnInit() {
    this.service.getTour(this.reservation.tourId).subscribe(tour => this.tour = tour);
  }

  getReservedSpots() {

  }

  

  calcAvailableSpots() {
    this.availableSpots = this.tour.maxPeople - this.totalReservedSpots;
  }
}
