import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  reserveRate(idrate: number):Observable<any> {
    let headers = new HttpHeaders();
    let token= localStorage.getItem('token');
    headers = headers.set('authorization', token)
    return  this.http.post<any>(environment.urlApi+"bookings/"+idrate,{},{observe:'response',headers})
  }

  filterByDest(valueDest: string): Observable <any> {
    return this.http.get<any>(environment.urlApi+'rates/search/destination/'+valueDest,{observe:'response'})
  }
  filterByOrigin(valueOrigin: string) : Observable <any> {
    return this.http.get<any>(environment.urlApi+'rates/search/origin/'+valueOrigin,{observe:'response'})
  }

  constructor(private http: HttpClient) { }

  /**
   * Get all rates
   */
  allRates(): Observable <any>{
    return this.http.get<any>(environment.urlApi+'rates',{observe:'response'})
  }
}
