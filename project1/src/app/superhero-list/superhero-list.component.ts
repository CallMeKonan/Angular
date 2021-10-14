import { Component } from '@angular/core';
import { SuperHero } from '../superhero-component/SuperHero';
import { ServicioSuperheroes } from '../Servicio/ServicioSuperheroe'

@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent {

  heroes: ServicioSuperheroes;

  constructor() {
      this.heroes=new ServicioSuperheroes();
   }

    addSuperHero(hero: SuperHero){
      this.heroes.heroes.unshift(hero);
    }

}
