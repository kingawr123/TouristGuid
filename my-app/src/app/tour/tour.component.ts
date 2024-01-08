import { ReservationsService } from './../../services/reservations.service';
import { Reservation } from './../../models/Reservation';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../../models/Tour';
import { Currency, CurrentCurrency } from '../../utils/constants';
import { ToursService } from '../../services/tours.service';
import { ReservedSpots } from '../../models/ReservedSpots';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule, MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss'
})


export class TourComponent implements OnInit{
  @Input() tour: Tour = {} as Tour;
  currency: Currency = CurrentCurrency;

  reservation: Reservation = {
    id: '',
    userId: 'admin',
    tourId: '',
    totalPrice: 0,
    reservedSpots: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  reervationsInfo: ReservedSpots = {
    id: '',
    tourId: '',
    reservedSpots: 0
  };

  availableSpots: number = 0;
  counter: number = 0;
  deleted: boolean = false;
  
  constructor(private service: ToursService, private reservationService: ReservationsService) { }

  ngOnInit(): void {
      this.service.getTourReservedSpots(this.tour.id).subscribe(reservations => {
        this.reervationsInfo = reservations[0];
        if (this.reervationsInfo == undefined) {
          this.reervationsInfo = {
            id: '',
            tourId: this.tour.id,
            reservedSpots: 0
          };
        }
        this.availableSpots = this.tour.maxPeople - this.reervationsInfo.reservedSpots;
      });
  } 

  addToCart(event: any) {
    event.stopPropagation();
    if (this.availableSpots > 0) {
      this.counter += 1;
      this.reervationsInfo.reservedSpots += 1;
      this.reservation.reservedSpots += 1;
      this.availableSpots -= 1;
      this.reservation.totalPrice = this.counter * this.tour.price;
    }
  }

  removeFromCart(event: any) {
    event.stopPropagation();
    if (this.counter > 0) {
      this.counter -= 1;
      this.reervationsInfo.reservedSpots -= 1;
      this.reservation.reservedSpots -= 1;
      this.availableSpots += 1;
      this.reservation.totalPrice = this.counter * this.tour.price;
    }
  }

  reserve(event: any) {
    event.stopPropagation();
    this.reservation.reservedSpots = this.counter;
    this.reservation.tourId = this.tour.id;
    this.reservation.createdAt = new Date();
    console.log(this.reservation)
    this.reservationService.reserveTour(this.reservation).subscribe(reservation => this.reservation = reservation);
    window.location.reload();
  }

  deleteTour(tour: Tour, event: any) {
    event.stopPropagation();
    this.service.deleteTour(tour).subscribe(tour => this.tour = tour);
    this.deleted = true;
    window.location.reload();

  }


}
