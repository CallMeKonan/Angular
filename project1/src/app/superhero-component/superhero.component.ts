import { Component, OnInit } from '@angular/core';
import { SuperHero } from './SuperHero';

@Component({
  selector: 'SuperHero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent implements OnInit {

  heroes: SuperHero[];
  
  constructor() {
    this.heroes=[
      new SuperHero("Jason Todd", "Red Hood", 19),
      new SuperHero("Bruce Wayne", "Batman", 48),
      new SuperHero("Ted Kord", "Blue Beetle", 25),
      new SuperHero("Rachel Roth", "Raven", 21),
      new SuperHero("Kory Anders", "Starfire", 36)
    ];
  }

  ngOnInit(): void {
  }

}
