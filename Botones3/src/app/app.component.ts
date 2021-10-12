import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cadena:string;

  constructor(){
    this.cadena="";
  }

  detectaBtn(button:Element){
    if(button.id=="btn1")
      this.cadena="Pulsó el botón 1";
    else if(button.id=="btn2")
      this.cadena="Pulsó el botón 2";
    else
      this.cadena="Pulsó el botón 3";
  }

}
