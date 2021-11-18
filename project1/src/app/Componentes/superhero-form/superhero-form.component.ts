import { Component, Output, EventEmitter } from '@angular/core';
import { SuperHero } from '../superhero-component/SuperHero'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'superhero-form',
  templateUrl: './superhero-form.component.html',
  styleUrls: ['./superhero-form.component.css']
})
export class SuperheroFormComponent {

  formulario:FormGroup;
  @Output() superheroCreated = new EventEmitter<SuperHero>();

  constructor(){
    this.formulario= new FormGroup({
       nombre: new FormControl("",
       [
         Validators.required,
         Validators.minLength(6)
        ]),
       pseudonimo: new FormControl(
        "",
        [
          Validators.required,
          Validators.minLength(6)
        ]),
       edad: new FormControl(
        "", 
        [
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ])
    });
  }

  createSuperHero(nombre:string, pseudonimo:string, edad:string){
    if(nombre.length>6 && pseudonimo.length>6 && edad!=null)
    this.superheroCreated.emit(new SuperHero(nombre, pseudonimo, Number.parseInt(edad)));
  }

}
