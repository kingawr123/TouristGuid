import { Component } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-add-tour',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './add-tour.component.html',
  styleUrl: './add-tour.component.scss'
})

export class AddTourComponent {
  basicImgUrl: string = 'https://www.travelandleisure.com/thmb/aKGPQXqw0jHSLjgYhjnpgD__s7g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plane-data-BUSYROUTES1217-f4f84b08d47f4951b11c148cee2c3dea.jpg';
  
  name: string = '';
  description: string = '';
  destination: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();
  price: number = 0;
  maxPeople: number = 0;
  freeSpots: number = 0;
  imageUrl: string = '';

  constructor(private service: ToursService) { }

  addTour() {

    const tour: Tour = { 
      id: '',
      name: this.name,
      description: this.description,
      destination: this.destination,
      startDate: this.startDate,
      endDate: this.endDate,
      price: this.price,
      maxPeople: this.maxPeople,
      freeSpots: this.maxPeople,
      imageUrl: this.imageUrl || this.basicImgUrl
    };
    this.service.addTour(tour).subscribe(tour =>tour = tour);
    this.reset();
  }

  filterDate: (date: Date | null) => boolean = 
    (date: Date | null) => {

      if (!date) {
        return false;
      }

      const day = (date || new Date()).getDay();
      const month = (date || new Date()).getMonth();
      const year = (date || new Date()).getFullYear();
      const today = new Date();
      return date >= today && date <= new Date(year + 1, month, day);  
    };

    reset() {
      this.name = '';
      this.description = '';
      this.destination = '';
      this.startDate = new Date();
      this.endDate = new Date();
      this.price = 0;
      this.maxPeople = 0;
      this.freeSpots = 0;
      this.imageUrl = '';
    }
}
