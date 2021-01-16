import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  allFlights():Observable<any>{
    return this.http.get<any>(environment.urlApi + 'flights',{ observe: 'response'});
  }
}
