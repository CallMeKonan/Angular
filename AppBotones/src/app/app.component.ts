import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  esconder:boolean;

  constructor(){
    this.esconder=true;
  }

  mostrarTexto(){
    this.esconder=false;
  }

}
