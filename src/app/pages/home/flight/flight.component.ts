import { Component, OnInit } from '@angular/core';
import {FligthModel} from '../../../models/flight.models';
import {FlightService} from '../../../services/flight/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  public flights:FligthModel[];

  constructor(private  fligthService:FlightService) {
    this.loadFligths();
  }

  ngOnInit(): void {
    this.loadFligths();
  }
  loadFligths(){
    this.fligthService.allFlights().subscribe(res=>{
      this.flights=res.body;
    })
    }
}


