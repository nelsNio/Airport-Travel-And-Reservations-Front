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
  valueOrigin: string="";
  valueDest: string="";


  constructor(private  fligthService:FlightService) {

  }

  ngOnInit(): void {
    this.loadFligths();
  }

  filterOrigin(){
    if (this.valueOrigin.length==0){
      this.loadFligths();
    }else {
    this.fligthService.filterByOrigin(this.valueOrigin).subscribe(res=>{
      this.flights=res.body;
    })
    }
  }
  filterDest(){
    if (this.valueDest.length==0){
      this.loadFligths();
    }else {

    this.fligthService.filterByDest(this.valueDest).subscribe(res=>{
      this.flights=res.body;
    })
    }
  }

  loadFligths(){
    this.fligthService.allFlights().subscribe(res=>{
      this.flights=res.body;
    })
    }
}


