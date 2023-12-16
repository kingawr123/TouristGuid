import { Component, OnInit } from '@angular/core';
import { ToursService } from './tours.service';
import { Tour } from '../../models/Tour';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit{
  tours: Tour[] = [] 
  constructor(private service: ToursService) { }

  ngOnInit() {
    this.service.getTours().subscribe(tours => this.tours = tours);
  }

  addToCart(tour: Tour) {
    console.log(`Added ${tour.name} to cart`);
    this.service.reserveTour(tour);
  }

  removeFromCart(tour: Tour) {
    console.log(`Removed ${tour.name} from cart`);
    this.service.deleteReservation(tour);
  }

  addTour(tour: Tour) {
    this.service.addTour(tour);
    this.service.getTours().subscribe(tours => this.tours = tours);
  }

  deleteTour(tour: Tour) {
    this.service.deleteTour(tour);
    this.service.getTours().subscribe(tours => this.tours = tours);
  }
}
