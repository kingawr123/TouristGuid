import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
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
  currecy = 'PLN';
  
  constructor(private service: ToursService) { }

  ngOnInit() {
    this.service.getTours().subscribe(tours => this.tours = tours);
  }

  getTheCheapestTour() {
    return this.tours.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
  }

  getTheMostExpensiveTour() {
    return this.tours.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
  }

  addToCart(tour: Tour) {
    console.log(`Added ${tour.name} to cart`);
    tour.freeSpots -= 1;
    this.service.reserveTour(tour);
    // this.service.reserveTour(tour);
  }

  removeFromCart(tour: Tour) {
    console.log(`Removed ${tour.name} from cart`);
    // this.service.deleteReservation(tour);
  }

  addTour(tour: Tour) {
    this.service.addTour(tour).subscribe(tours => this.tours.push(tours));
  }

  deleteTour(tour: Tour) {
    this.service.deleteTour(tour).subscribe(tours => this.tours = this.tours.filter(t => t.id !== tour.id));
  }
}
