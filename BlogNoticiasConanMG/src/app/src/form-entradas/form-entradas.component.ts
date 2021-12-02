import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioEntradasService } from 'src/app/Modelo/servicio-entradas.service';

@Component({
  selector: 'form-entradas',
  templateUrl: './form-entradas.component.html',
  styleUrls: ['./form-entradas.component.css']
})
export class FormEntradasComponent {

  formularioEntradas!:FormGroup;

  constructor(private servicio:ServicioEntradasService) {
    
    this.formularioEntradas=new FormGroup({
      titulo: new FormControl("",
      [
        Validators.required,
        Validators.minLength(10)
      ]),
      contenido: new FormControl("",
      [
        Validators.required,
        Validators.maxLength(300)
      ]
      )
    });
  }

  public addEntrada(titulo:string, contenido:String){
    if(titulo.length>10 && contenido.length>0 && contenido.length<300)
    this.servicio.addEntrada(titulo, contenido);
  }

  public getDate() : String {
    return new Date().toUTCString();
  }

}
