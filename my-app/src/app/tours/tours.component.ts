import { Component, OnInit } from '@angular/core';
import { ToursService } from './tours.service';
import { Tour } from '../../models/Tour';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent implements OnInit{
  tours: Tour[] = [] 
  constructor(private service: ToursService) { }

  ngOnInit() {
    this.tours = this.service.getTours()
  }

  addTour(tour: Tour) {
    this.service.addTour(tour);
    this.tours = this.service.getTours();
  }

  deleteTour(tour: Tour) {
    this.service.deleteTour(tour);
    this.tours = this.service.getTours();
  }
}
