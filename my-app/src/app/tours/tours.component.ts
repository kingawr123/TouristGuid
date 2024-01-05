import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTourComponent } from '../add-tour/add-tour.component';
import { RouterLink } from '@angular/router';
import { Currency, Currencies, CurrentCurrency } from "../../utils/constants";

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, AddTourComponent, RouterLink],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit{
  tours: Tour[] = [] 
  currency = CurrentCurrency;
  
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

  addToCart(tour: Tour, event: any) {
    event.stopPropagation();
    console.log(`Added ${tour.name} to cart`);
    tour.freeSpots -= 1;
    this.service.updateTour(tour);
  }

  removeFromCart(tour: Tour, event: any) {
    event.stopPropagation();
    tour.freeSpots += 1;
    this.service.updateTour(tour);
    console.log(`Removed ${tour.name} from cart`);
    
  }

  deleteTour(tour: Tour) {
    this.service.deleteTour(tour).subscribe(tour => this.tours = this.tours.filter(t => t.id !== tour.id));
    // probably not the best way to do it, but it works
    window.location.reload();
  }
}
