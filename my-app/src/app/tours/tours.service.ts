import { Injectable } from '@angular/core';
import { MockData } from '../../mock-data';
import { Tour } from '../../models/Tour';

@Injectable({
  providedIn: 'root'
})
export class ToursService {
  tours: Tour[] = [];
  constructor() {
    this.tours = MockData.tours;
  }

  getTours(): Tour[] {
    return this.tours;
  }

  addTour(tour: Tour) {
    this.tours.push(tour);
  }

  deleteTour(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index !== -1) {
      this.tours.splice(index, 1);
    }
  }
}
