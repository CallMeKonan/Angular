import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SuperHero } from '../Componentes/superhero-component/SuperHero';

@Injectable({
  providedIn: 'root',
})
export class ServicioHeroesService {

  private _sujeto:BehaviorSubject<SuperHero[]>;
  private _heroes:SuperHero[];

  constructor() { 
    this._heroes=[
      new SuperHero("Jason Todd", "Red Hood", 19),
      new SuperHero("Bruce Wayne", "Batman", 48),
      new SuperHero("Ted Kord", "Blue Beetle", 25),
      new SuperHero("Rachel Roth", "Raven", 21),
      new SuperHero("Kory Anders", "Starfire", 36)
    ];
    this._sujeto=new BehaviorSubject(this.heroes);
  }

  public devuelveHeroes() : Observable<SuperHero[]> {
      return this._sujeto.asObservable();
  }

  public addHeroes(heroe:SuperHero){
    this._heroes.push(heroe);
    this._sujeto.next([...this.heroes]);
  }

  public borrarHeroe(heroe:SuperHero) {
    for(let i=0;i<this.heroes.length;i++){
      if(this.heroes[i]==heroe)
        this.heroes.splice(i, 1);
    }
    this.sujeto.next([...this.heroes]);
  }

  get sujeto(){
    return this._sujeto;
  }

  get heroes(){
    return this._heroes;
  }
}
