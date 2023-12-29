import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { Review } from '../../../models/Review';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  constructor(private service: ReviewsService,  private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.getReviews(params['id']).subscribe(reviews => this.reviews = reviews);
    });
  }
  printReviews() {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    } );
    console.log(this.reviews);
  }
}
