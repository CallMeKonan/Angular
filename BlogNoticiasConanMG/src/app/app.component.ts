import { Component } from '@angular/core';
import { ServicioOscuroService } from './Modelo/servicio-oscuro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogNoticiasConanMG';

  private _rutaImagen:String;
  private _temaOscuro:Boolean;

  constructor(public servicioOscuro:ServicioOscuroService) {
    this._rutaImagen="../assets/light.png"
    this._temaOscuro=false;
    servicioOscuro.devuelveTema().subscribe( oscuro => this._temaOscuro=oscuro )
  }

  public cambiarTema(){
    if(this._rutaImagen==="../assets/light.png")
    this._rutaImagen="../assets/dark.png"
    else{
      this._rutaImagen="../assets/light.png"
    }
    this.servicioOscuro.cambiaTema()
  }

  get rutaImagen(){
    return this._rutaImagen;
  }

  get temaOscuro(){
    return this._temaOscuro;
  }

}
