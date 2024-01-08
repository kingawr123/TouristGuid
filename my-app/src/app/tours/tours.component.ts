import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTourComponent } from '../add-tour/add-tour.component';
import { RouterLink } from '@angular/router';
import { Currency, CurrentCurrency } from "../../utils/constants";
import { TourComponent } from '../tour/tour.component';
import { CartWidgetComponent } from '../cart-widget/cart-widget.component';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [
    CommonModule, 
    MatIconModule, 
    MatButtonModule, 
    AddTourComponent, 
    RouterLink, 
    TourComponent,
    CartWidgetComponent],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit{
  tours: Tour[] = [];
  currency: Currency = CurrentCurrency;
  
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

}
