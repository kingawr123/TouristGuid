import { CommonModule, } from '@angular/common';
import { AfterContentInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { Tour } from '../../models/Tour';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReviewsComponent } from './reviews/reviews.component';

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
export class TourDetailsComponent implements OnInit, AfterContentInit{
  tour: Tour = {
    id: 0,
    name: '',
    description: '',
    destination: 'Poland',
    startDate: new Date(),
    endDate: new Date(),
    price: 0,
    maxPeople: 0,
    freeSpots: 0,
    imageUrl: ''
  }
  mapOptions: google.maps.MapOptions = {
    center: {lat: 52, lng: 21.9},
    zoom: 8,
    disableDefaultUI: true
  };

  constructor(private service: ToursService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getTour(params['id']).subscribe(tour => this.tour = tour);
    });
  }

  ngAfterContentInit() {
    this.getCoordinates();
  }

  getCoordinates() {
    console.log(this.tour.destination);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: this.tour.destination}, (results, status) => {
      console.log(status);
      console.log(results);
      if (status === 'OK') {
        if (results){
          this.mapOptions.center = results[0].geometry.location;
        }
      }
      else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
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
