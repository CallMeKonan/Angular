import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnEmitir:number;

  constructor(){
    this.btnEmitir=0;
  }

  pulsaBoton(id:number){
    this.btnEmitir=id;
  }
  
}
