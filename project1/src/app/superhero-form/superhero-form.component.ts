import { Component, Output, EventEmitter } from '@angular/core';
import { SuperHero } from '../superhero-component/SuperHero'

@Component({
  selector: 'superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.css']
})
export class SuperheroFormComponent {

  @Output() superheroCreated = new EventEmitter<SuperHero>();

  createSuperHero(nombre:string, pseudonimo:string, edad:string){
    this.superheroCreated.emit(new SuperHero(nombre, pseudonimo, Number.parseInt(edad)));
  }

}
