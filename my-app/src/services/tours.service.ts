import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

import { Tour } from '../models/Tour';
import { Rate } from '../models/Rate';
import { ReservedSpots } from '../models/ReservedSpots';

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

  getTourRating(id: string): Observable<Rate[]> {
    const url = `${toursUrl}/${id}/rating`;
    return this.http.get<Rate[]>(url).pipe(
      tap(_ => console.log(`fetched rating for tour with id ${id}`)),
      catchError(this.handleError<Rate[]>(`getTourRating id=${id}`))
    );
  }

  getTourReservedSpots(id: string): Observable<ReservedSpots[]> {
    const url = `${toursUrl}/${id}/reservationsinfo`;
    return this.http.get<ReservedSpots[]>(url).pipe(
      tap(_ => console.log(`fetched reserved spots for tour with id ${id}`)),
      catchError(this.handleError<ReservedSpots[]>(`getTourReservedSpots id=${id}`))
    );
  }

  getNumberOfReservedSpots(): Observable<ReservedSpots[]> {
    const url = `${toursUrl}/reservedspots`;
    return this.http.get<ReservedSpots[]>(url)
  }
  
  getTour(id: string): Observable<Tour> {
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

  updateTourAvailableSpots(id: string, boughtSpots: number) {
    const url = `${toursUrl}/${id}`;
    return this.http.put<Tour>(url, {maxPeople: boughtSpots}, httpOptions).pipe(
      tap(_ => console.log(`updated tour with id ${id}`)),
      catchError(this.handleError<Tour>('reserveTour'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error);
      return of(result as T);
    };
  }
}
