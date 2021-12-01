import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entrada } from 'src/app/Modelo/entrada';
import { ServicioEntradasService } from 'src/app/Modelo/servicio-entradas.service';

@Component({
  selector: 'list-entradas',
  templateUrl: './list-entradas.component.html',
  styleUrls: ['./list-entradas.component.css']
})
export class ListEntradasComponent {

  private suscripcion:Subscription;
  private _arrayEntradas:Entrada[];

  constructor(private servicioEntradas:ServicioEntradasService) { 
    this._arrayEntradas=new Array<Entrada>();
    this.suscripcion=servicioEntradas.devuelveEntradas().subscribe( entradas => this._arrayEntradas=entradas);
  }

  get arrayEntradas(){
    return this._arrayEntradas
  }

}
