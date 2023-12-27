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
  tour: Tour = {
    id: 0,
    name: '',
    description: '',
    destination: '',
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    maxPeople: 0,
    freeSpots: 0,
    imageUrl: ''
  };
  
  basicImgUrl: string = 'https://www.travelandleisure.com/thmb/aKGPQXqw0jHSLjgYhjnpgD__s7g=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/plane-data-BUSYROUTES1217-f4f84b08d47f4951b11c148cee2c3dea.jpg';
  id: number = 0;
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
    const len = 10;
    const tour: Tour = { 
      id: len+1,
      name: this.name,
      description: '',
      destination: '',
      startDate: new Date(),
      endDate: new Date(),
      price: 0,
      maxPeople: 0,
      freeSpots: 0,
      imageUrl: ''
    };
    this.service.addTour(tour).subscribe(tour =>tour = tour);
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
      return date >= today && date <= new Date(year + 1, month, day);  };
}
