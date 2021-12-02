import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Entrada } from 'src/app/Modelo/entrada';
import { ServicioAuthService } from 'src/app/Modelo/servicio-auth.service';
import { ServicioEntradasService } from 'src/app/Modelo/servicio-entradas.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  formularioLogin:FormGroup;

  constructor(public _servicioAuth:ServicioAuthService, private _router:Router) {
    this.formularioLogin=new FormGroup({
      usuario:new FormControl("",
      [
        Validators.required,
      ]),
      psswd:new FormControl("",
      [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  public accesoPermitido(usuario:String, psswd:String){
    if(usuario.length>0 && psswd.length>8){
      this._servicioAuth.actualizaAuth();
      this._router.navigate(['/entradas']);
    }
  }

}
