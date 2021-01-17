import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FlightComponent } from './pages/home/flight/flight.component';
import { UserFlightComponent } from './pages/home/user-flight/user-flight.component';
import { BookingComponent } from './pages/home/booking/booking.component';
import { RatesComponent } from './pages/home/rates/rates.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    FlightComponent,
    UserFlightComponent,
    BookingComponent,
    RatesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
