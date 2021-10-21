import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rutaImagen:string="";
  visible:boolean=true;

  constructor(){
    this.rutaImagen="assets/Drake1.jpg";
    this.visible=true;
  }

  cambiaVisibilidad(event:boolean){
    this.visible=event;
  }

  cambiaRutaActual(event:string){
    this.rutaImagen=event;
  }

}
