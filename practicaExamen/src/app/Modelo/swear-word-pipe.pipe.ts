import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swearWordPipe'
})
export class SwearWordPipePipe implements PipeTransform {

  transform(value: string, palabrasBaneadas:string) : string {
    
    let palabrasQuitar=palabrasBaneadas.replace(" ", "").split(",");

    if(palabrasQuitar.includes(value)){
      value=value.replace(value, "$#*!");
    }

    return value
  }

}
