import { Component, Output, EventEmitter } from '@angular/core';
import { ServicioAuthService } from './Modelo/servicio-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogNoticiasConanMG';

  @Output() oscuro!: EventEmitter<Boolean>;

  public cambiarTema(){
    this.oscuro.emit(!this.oscuro);
  }

}
