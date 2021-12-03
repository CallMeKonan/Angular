import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAuthService } from 'src/app/Modelo/servicio-auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  formularioLogin:FormGroup;
  private _acceder:Boolean;

  constructor(public _servicioAuth:ServicioAuthService, private _router:Router) {
    this._acceder=false;
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

  get acceder(){
    return this._acceder;
  }

  public accesoPermitido(usuario:String, psswd:String){
    this._acceder=true;
    if(usuario.length>0 && psswd.length>8){
      this._servicioAuth.actualizaAuth();
      this._router.navigate(['/entradas']);
    }
  }

}
