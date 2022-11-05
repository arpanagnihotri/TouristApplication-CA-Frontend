import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  getTouristList() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8999/api/v1/tourists";


  constructor(private httpClient: HttpClient) { }

  getTouristsList(): Observable<Tourist[]> {
    return this.httpClient.get<Tourist[]>(`${this.baseURL}`);
  }

  createTourist(tourist: Tourist): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, tourist);
  }


}
