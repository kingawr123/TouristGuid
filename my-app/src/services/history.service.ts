import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoughtTour } from '../models/BoughtTour';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
const historysUrl = 'http://localhost:3000/api/history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getHistory() {
    return this.http.get<BoughtTour[]>(historysUrl, httpOptions);
  }

  buyTour(tours: BoughtTour){
    return this.http.post<BoughtTour>(historysUrl, tours, httpOptions);
  }
}
