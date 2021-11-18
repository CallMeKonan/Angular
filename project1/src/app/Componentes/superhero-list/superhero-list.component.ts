import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServicioHeroesService } from '../../Servicio/servicio-heroes.service';
import { SuperHero } from '../superhero-component/SuperHero';

@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent {


  private _displayHeroes:SuperHero[];
  private _suscr;

  constructor(private listaHeroes:ServicioHeroesService){
    this._displayHeroes=this.listaHeroes.heroes;
    this._suscr=listaHeroes.devuelveHeroes().subscribe( heroes => this._displayHeroes = heroes );
  }

    addSuperHero(hero: SuperHero){
      this.listaHeroes.addHeroes(hero);
    }

    borrarEntrada(heroeServicio:SuperHero){
      this.listaHeroes.borrarHeroe(heroeServicio);
    }

    get displayHeroes(){
      return this._displayHeroes;
    }

}
