import { Component, OnInit } from '@angular/core';
import {UsuarioModels} from '../../models/usuario.models';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModels;
  recordarme = false;

  constructor(private  authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.usuario= new UsuarioModels();
  }

  login(form: NgForm){
    if (form.invalid){return;}
    Swal.fire(
      'Login job!',
      'Information sender!',
      'success'
    )
    Swal.showLoading();

    this.authService.login(this.usuario)
      .subscribe(resp=>{

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }
        if(resp.data){
            Swal.close();
            this.router.navigateByUrl('/home/all-flights');
            this.authService.saveToken(resp.data.token);
        }else {
            Swal.close();
            this.showErrLogin()

        }

      }, (error) => {

        this.showErrLogin();

        })
  }

  showErrLogin(){
      Swal.fire(
          'Credenciales incorectas!',
          "(Usuario) o contraseña incorectos",
          'error'
      )

  }

}
