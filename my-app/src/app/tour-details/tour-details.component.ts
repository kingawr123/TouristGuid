import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent implements OnInit{
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
  }
  constructor(private service: ToursService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getTour(params['id']).subscribe(tour => this.tour = tour);
    });
  }
}
