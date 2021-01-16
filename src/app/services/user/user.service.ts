import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuarioModels} from '../../models/usuario.models';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  /**
   * Register a user
   * @param user
   */
  createUser(user:UsuarioModels){
    return this.http.post<any>(environment.urlApi+'users/',user,{observe:'response'})
  }
}
