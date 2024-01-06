import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { of } from 'rxjs';

import { Reservation } from '../models/Reservation';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
const reservationsUrl = 'http://localhost:3000/api/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  reserveTour(reservation: Reservation) {
    return this.http.post<Reservation>(reservationsUrl, reservation, httpOptions).pipe(
      tap(r => console.log(`Reserved tour with id ${r.id}`)),
      catchError(this.handleError<Reservation>('reserveTour'))
    );
  }

  cancelReservation(reservation: Reservation) {
    const id = reservation.id;
    const url = `${reservationsUrl}/${id}`;
    return this.http.delete<Reservation>(url, httpOptions).pipe(
      tap(_ => console.log(`Canceled reservation with id ${id}`)),
      catchError(this.handleError<Reservation>('cancelReservation'))
    );
  }

  getReservations(userId: string): Observable<Reservation[]> {
    const url = `${reservationsUrl}/${userId}`;
    return this.http.get<Reservation[]>(url).pipe(  
      tap(_ => console.log(`fetched reservations for user with id ${userId}`)),
      catchError(this.handleError<Reservation[]>(`getReservations userId=${userId}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { 
      console.error(error);
      return of(result as T);
    };
  }

}
