import { CommonModule, } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReviewsComponent } from './reviews/reviews.component';
import { Rate } from '../../models/Rate';
import { Currency, CurrentCurrency } from '../../utils/constants';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [
    CommonModule, 
    ReviewsComponent,
    MatIconModule, 
    MatButtonModule, 
    RouterLink, 
    GoogleMapsModule
  ],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TourDetailsComponent implements OnInit{
  tour: Tour = {
    id: '',
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

  tourRating: Rate = {
    id: '',
    avgRating: 0,
    count: 0
  };
  
  mapReady: boolean = false;

  mapOptions: google.maps.MapOptions = {
    center: {lat: 52, lng: 21.9},
    zoom: 8,
    disableDefaultUI: true
  };

  currency: Currency = CurrentCurrency;

  constructor(private service: ToursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getTour(params['id']).subscribe(tour => this.handleInit(tour));
      this.service.getTourRating(params['id']).subscribe(rating => this.tourRating = rating[0]); //this.tourRating = rating
    });
  }

  handleInit(t: Tour){
    this.tour = t;
    this.getCoordinates(t);
  }

  storeResult(lat: number, lng: number) {
    this.mapOptions.center = {lat: lat, lng: lng};
    this.mapReady = true;
  }

  getCoordinates(t: Tour) {
    var geocoder = new google.maps.Geocoder();
    var lat = 0;
    var lng = 0;
    geocoder.geocode({address: t.destination}, (results, status) => {
      if (status === 'OK') {
        if (results){
          lat = results[0].geometry.location.lat();
          lng = results[0].geometry.location.lng();
        }
      }
      else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
      this.storeResult(lat, lng);
    }
    );
  }

  goBack(){
    this.router.navigate(['/tours']);
  }
  
  addToCart(tour: Tour) {
    console.log(`Added ${tour.name} to cart`);
    tour.freeSpots -= 1;
    this.service.updateTour(tour);
  }

  removeFromCart(tour: Tour) {
    tour.freeSpots += 1;
    this.service.updateTour(tour);
    console.log(`Removed ${tour.name} from cart`);
    
  }
}
