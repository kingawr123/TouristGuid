import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import { Tour } from '../models/Tour';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
const toursUrl = 'http://localhost:3000/api/tours';

@Injectable({
  providedIn: 'root'
})

export class ToursService {
  
  constructor(private http: HttpClient) { }

  getTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(toursUrl)
  }
  
  getTour(id: number): Observable<Tour> {
    const url = `${toursUrl}/${id}`;
    return this.http.get<Tour>(url).pipe(
      tap(_ => console.log(`fetched tour with id ${id}`)),
      catchError(this.handleError<Tour>(`getTour id=${id}`))
    );
  }

  addTour(tour: Tour) {
    return this.http.post<Tour>(toursUrl, tour, httpOptions).pipe(
      tap(t => console.log(`Added tour with id ${t.id}`)),
      catchError(this.handleError<Tour>('addTour'))
    );
  }


  deleteTour(tour: Tour) {
    const id = tour.id;
    const url = `${toursUrl}/${id}`;
    return this.http.delete<Tour>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted tour with id ${id}`)),
      catchError(this.handleError<Tour>('deleteTour'))
    );
  }

  updateTour(tour: Tour) {
    const id = tour.id;
    const url = `${toursUrl}/${id}`;
    return this.http.put<Tour>(url, tour, httpOptions).pipe(
      tap(_ => console.log(`updated tour with id ${id}`)),
      catchError(this.handleError<Tour>('reserveTour'))
    );
  }


  // reserveTour(tour: Tour) {
  //   const index = this.tours.indexOf(tour);
  //   if (index !== -1 && this.tours[index].freeSpots > 0){
  //     this.tours[index].freeSpots -= 1;
  //   }
  // }

  // deleteReservation(tour: Tour) {
  //   const index = this.tours.indexOf(tour);
  //   if (index !== -1 && this.tours[index].freeSpots < this.tours[index].maxPeople) {
  //     this.tours[index].freeSpots += 1;
  //   }
  // }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error);
      return of(result as T);
    };
  }
}
