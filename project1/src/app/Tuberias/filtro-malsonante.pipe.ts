import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroMalsonante'
})
export class FiltroMalsonantePipe implements PipeTransform {

  transform(value: String, palabrasBaneadas:String): String {
    
    let palabrasQuitar:String[];

    palabrasBaneadas

    palabrasBaneadas.forEach(palabra=>{
      let cadenaReemplazar="";
      for(let i=0;i<palabra.length;i++){
        cadenaReemplazar+="*";
      }
      value.replace(palabra.valueOf(), cadenaReemplazar);
    })

    return value;
  }

}
