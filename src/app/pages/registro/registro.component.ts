import { Component, OnInit } from '@angular/core';
import {UsuarioModels} from '../../models/usuario.models';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
import Swal from 'sweetalert2';
import {AuthService} from '../../services/auth.service';
import {Route, Router} from '@angular/router';
import  sha1 from  'sha1';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public formControlDateSince = new FormControl('', [Validators.required]);

  usuario: UsuarioModels;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.usuario= new UsuarioModels();
  }

  onSubmit(form: NgForm){
    if (form.invalid){

    }else {
      Swal.fire('Creando usuario!', 'Validando Información !', 'info')
      Swal.showLoading();
      this.usuario.password= sha1(this.usuario.password);
      this.userService.createUser(this.usuario).subscribe(resp=>{
        Swal.close();
        Swal.fire('Usuario creado!', 'Bienvenido!', 'success')
        this.router.navigateByUrl('/login');


      },error => {
        this.showErrLogin();
      })
    }
    console.log(form)
  }
  showErrLogin(){
    Swal.fire(
        'Información incorecta!',
        "Al parecer el usuario ya existe o hay una información incorecta!",
        'error'
    )

  }

}
