import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  /**
   * Get all Flights
   */
  allFlights(): Observable<any>{
    return this.http.get<any>(environment.urlApi + 'flights',{ observe: 'response'});
  }

  /**
   * Get Flights filtered by destination
   * @param val
   */
  filterByDest(val:string): Observable<any>{
    return this.http.get<any>(environment.urlApi + 'flights/search/destination/'+val,{ observe: 'response'});
  }

  /**
   * Get Flights filtered by origin
   * @param val
   */
  filterByOrigin(val:string): Observable<any>{
    return this.http.get<any>(environment.urlApi + 'flights/search/origin/'+val,{ observe: 'response'});
  }
}
