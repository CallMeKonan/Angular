import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entrada } from 'src/app/Modelo/entrada';
import { ServicioEntradasService } from 'src/app/Modelo/servicio-entradas.service';
import { ServicioOscuroService } from 'src/app/Modelo/servicio-oscuro.service';

@Component({
  selector: 'list-entradas',
  templateUrl: './list-entradas.component.html',
  styleUrls: ['./list-entradas.component.css']
})
export class ListEntradasComponent {

  private suscripcion:Subscription;
  private _arrayEntradas:Entrada[];
  private _temaOscuro:Boolean;

  constructor(private servicioEntradas:ServicioEntradasService, private servicioOscuro:ServicioOscuroService) {
    this._temaOscuro=false;
    servicioOscuro.devuelveTema().subscribe( oscuro => this._temaOscuro=oscuro );
    this._arrayEntradas=new Array<Entrada>();
    this.suscripcion=servicioEntradas.devuelveEntradas().subscribe( entradas => this._arrayEntradas=entradas);
  }
  
  get temaOscuro(){
    return this._temaOscuro;
  }

  public borraEntrada(id:number){
    this.servicioEntradas.removeEntrada(id);
  }

  get arrayEntradas(){
    return this._arrayEntradas
  }

}
