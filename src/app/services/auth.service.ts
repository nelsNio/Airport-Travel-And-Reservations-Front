import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModels} from '../models/usuario.models';
import {map} from 'rxjs/operators';
// @ts-ignore
import  sha1 from  'sha1';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private credentualsAuth={
    email: "",
    password: ""
  }
  userToken:string;

  constructor(private  http: HttpClient) {
    this.loadToken();
  }

  /**
   * New sesion
   * @param usuario
   */
  login(usuario:UsuarioModels): Observable<any>{
    this.credentualsAuth.password= sha1(usuario.password);
    this.credentualsAuth.email=usuario.email;
    return this.http.post<any>(`${environment.urlApi}login/`, this.credentualsAuth)
  }


  /**
   * Save token in localStorage
   * @param token
   */
  saveToken(token:String){
    // @ts-ignore
    this.userToken=token;
    localStorage.setItem('token',this.userToken);

  }

  /**
   * load token from local storage
   */
  loadToken(){
    // @ts-ignore
    if (localStorage.getItem('token')){
      this.userToken=localStorage.getItem('token');
    }
    else {
      this.userToken='';
    }
  }

  /**
   * Validate if token is valid
   */
  isAutenticated():boolean{
      return (this.userToken.length<5)?false:true;
  }

  /**
   *  Close sesion
   */
  logout(){
    return localStorage.removeItem('token');
  }
}

