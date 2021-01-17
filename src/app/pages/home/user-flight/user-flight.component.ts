import { Component, OnInit } from '@angular/core';
import {FligthModel} from '../../../models/flight.models';
import {FlightService} from '../../../services/flight/flight.service';
import {RateModel} from '../../../models/rate.models';
import {RateService} from '../../../services/rate/rate.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-flight',
  templateUrl: './user-flight.component.html',
  styleUrls: ['./user-flight.component.css']
})
export class UserFlightComponent implements OnInit {


  public rates:RateModel[];
  valueOrigin: string="";
  valueDest: string="";


  constructor(private  rateService:RateService,private router:Router) {

  }

  ngOnInit(): void {
    this.loadRates();
  }

  filterOrigin(){
    if (this.valueOrigin.length==0){
      this.loadRates();
    }else {
      this.rateService.rtUserByOrigin(this.valueOrigin).subscribe(res=>{
        this.rates=res.body;
      })
    }
  }
  filterDest(){
    if (this.valueDest.length==0){
      this.loadRates();
    }else {

      this.rateService.rtUserByDest(this.valueDest).subscribe(res=>{
        this.rates=res.body;
      })
    }
  }

  loadRates(){
    this.rateService.allRatesUser().subscribe(res=>{
      this.rates=res.body;
    })
  }
}


