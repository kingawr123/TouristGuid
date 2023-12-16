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

  reserveTour(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index !== -1 && this.tours[index].freeSpots > 0){
      this.tours[index].freeSpots -= 1;
    }
  }

  deleteReservation(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index !== -1 && this.tours[index].freeSpots < this.tours[index].maxPeople) {
      this.tours[index].freeSpots += 1;
    }
  }

  deleteTour(tour: Tour) {
    const index = this.tours.indexOf(tour);
    if (index !== -1) {
      this.tours.splice(index, 1);
    }
  }
}
