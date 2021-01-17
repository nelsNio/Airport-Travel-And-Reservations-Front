import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import {AuthGuard} from "./guards/auth.guard";
import {FlightComponent} from './pages/home/flight/flight.component';
import {UserFlightComponent} from './pages/home/user-flight/user-flight.component';
import {BookingComponent} from './pages/home/booking/booking.component';
import {RatesComponent} from './pages/home/rates/rates.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate:[AuthGuard] ,
    children:[{path:'all-flights',component:FlightComponent},
    {path:'user-flights',component:UserFlightComponent},
    {path:'rates',component:RatesComponent}
    ]},
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
