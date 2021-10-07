import { Component } from '@angular/core';
import { SuperHero } from '../superhero-component/SuperHero';

@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent {

  heroes: SuperHero[];

  constructor() {
    this.heroes=[
      new SuperHero("Jason Todd", "Red Hood", 19),
      new SuperHero("Bruce Wayne", "Batman", 48),
      new SuperHero("Ted Kord", "Blue Beetle", 25),
      new SuperHero("Rachel Roth", "Raven", 21),
      new SuperHero("Kory Anders", "Starfire", 36)
    ]; }

    addSuperHero(hero: SuperHero){
      this.heroes.unshift(hero);
    }

}
