import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../../services/reviews.service';
import { Review } from '../../../models/Review';
import { AddReviewComponent } from './add-review/add-review.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    AddReviewComponent, 
    CommonModule,
    MatIconModule, 
  ],
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
}
