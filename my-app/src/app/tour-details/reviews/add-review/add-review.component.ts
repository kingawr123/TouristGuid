import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Review } from '../../../../models/Review';
import { ReviewsService } from '../../../../services/reviews.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
  ],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.scss'
})
export class AddReviewComponent {
    username = '';
    opinion = '';
    rating = 0;

  constructor(private service: ReviewsService, private route: ActivatedRoute) { }

  addReview() {
    const review: Review = {
      id: '',
      username: this.username,
      opinion: this.opinion,
      rating: this.rating,
      tour: '',
    };

    review.tour = this.route.snapshot.paramMap.get('id') || '';
    this.service.addReview(review).subscribe(review => review = review);
    this.reset();
    window.location.reload();
  }

  reset() {
    this.username = '';
    this.opinion = '';
    this.rating = 0;
  }
}
