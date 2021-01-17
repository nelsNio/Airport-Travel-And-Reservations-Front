import { Component, OnInit } from '@angular/core';
import {FligthModel} from '../../../models/flight.models';
import {FlightService} from '../../../services/flight/flight.service';
import {RateModel} from '../../../models/rate.models';
import {RateService} from '../../../services/rate/rate.service';
import Swal from 'sweetalert2';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {


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
      this.rateService.filterByOrigin(this.valueOrigin).subscribe(res=>{
        this.rates=res.body;
      })
    }
  }
  filterDest(){
    if (this.valueDest.length==0){
      this.loadRates();
    }else {

      this.rateService.filterByDest(this.valueDest).subscribe(res=>{
        this.rates=res.body;
      })
    }
  }

  loadRates(){
    this.rateService.allRates().subscribe(res=>{
        this.rates=res.body;
    })
  }

  reserve(idrate: number) {
    Swal.fire('Reservando Vuelo!', 'Validando información!', 'info')
    Swal.showLoading();

    this.rateService.reserveRate(idrate).subscribe(res=>{
      if (res.body){
        Swal.fire('Vuelo Reservado!', 'Información Correcta!', 'success')

        this.router.navigateByUrl('/home/user-flights');
      }
    },error => {
      this.showErrReserve()

    })
  }
  showErrReserve(){
    Swal.fire(
        'Error en reservación!',
        "Ya tienes vuelo reservado previamente para la misma fecha",
        'warning'
    )

  }
}
