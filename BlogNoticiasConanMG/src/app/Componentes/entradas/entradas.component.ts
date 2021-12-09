import { Component } from '@angular/core';
import { ServicioOscuroService } from 'src/app/Modelo/servicio-oscuro.service';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {

  private _temaOscuro:Boolean;

  constructor(private servicioOscuro:ServicioOscuroService) {
    this._temaOscuro=false;
    servicioOscuro.devuelveTema().subscribe( oscuro => this._temaOscuro=oscuro );
  }

  get temaOscuro(){
    return this._temaOscuro;
  }

}
