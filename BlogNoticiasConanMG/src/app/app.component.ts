import { Component } from '@angular/core';
import { ServicioAuthService } from './Modelo/servicio-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogNoticiasConanMG';

  private _rutaImagen:String;
  private _temaOscuro:Boolean;

  constructor() {
    this._rutaImagen="../assets/light.png"
    this._temaOscuro=false;
  }

  public cambiarTema(){
    if(this._rutaImagen==="../assets/light.png")
    this._rutaImagen="../assets/dark.png"
    else{
      this._rutaImagen="../assets/light.png"
    }
    this._temaOscuro=!this._temaOscuro;
  }

  get rutaImagen(){
    return this._rutaImagen;
  }

  get temaOscuro(){
    return this._temaOscuro;
  }

}
