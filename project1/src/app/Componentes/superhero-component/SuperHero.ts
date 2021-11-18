
export class SuperHero {

    nombre:String;
    pseudonimo:String;
    invisibilidad:Boolean;
    edad:number;
  
    constructor(nombre:string, pseudonimo:string, edad:number) {
      this.nombre=nombre;
      this.pseudonimo=pseudonimo;
      this.edad=edad;
      this.invisibilidad=false;
     }
  
     cambiarVisibilidad(){
       this.invisibilidad=!this.invisibilidad;
     }
  
  }