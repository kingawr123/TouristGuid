import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Review } from '../models/Review';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
const reviewUrl = 'http://localhost:3000/api/reviews';

@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  
  constructor(private http: HttpClient) { }

  getReviews(id: string): Observable<Review[]> {
    const url = `${reviewUrl}/${id}`;
    return this.http.get<Review[]>(url)
  }

  // addReview(review: Review) {
  //   const url = `${reviewUrl}/${review.tour}`;
  //   return this.http.post<Review>(url, review, httpOptions).pipe(
  //     tap(t => console.log(`Added review to tour with id ${t.tour}`))  
  //   );
  // }

}
