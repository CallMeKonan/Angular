import { Component, Output, EventEmitter } from '@angular/core';
import { ServicioAuthService } from './Modelo/servicio-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogNoticiasConanMG';

  private temaOscuro:Boolean;
  @Output() oscuro!: EventEmitter<Boolean>;

  constructor(){
    this.temaOscuro=false;
  }

  public cambiarTema(){
    this.temaOscuro=!this.temaOscuro;
    this.oscuro.emit(this.temaOscuro);
  }

}
