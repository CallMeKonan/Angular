import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  @Output() imagen=new EventEmitter<string>();
  @Output() esconder=new EventEmitter<boolean>();
  ruta:string="";
  escondido:boolean;

  constructor(){
    this.ruta="assets/Drake1.jpg";
    this.escondido=true;
  }

  cambiaRuta(){
    if (this.ruta=="assets/Drake1.jpg")
      this.ruta="assets/Drake2.jpg";
    else
      this.ruta="assets/Drake1.jpg";
  }

  emiteRuta(){
    this.cambiaRuta();
    this.imagen.emit(this.ruta)
  }

  cambiaVisible(){
    this.esconder.emit(!this.escondido);
    this.escondido=!this.escondido;
  }

}
