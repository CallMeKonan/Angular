import { Component, Input } from '@angular/core';
import { SuperHero } from '../superhero-component/SuperHero';
import { ServicioSuperheroes } from '../Servicio/ServicioSuperheroe'
import { ServicioSuperheroeService } from '../Servicio/servicio-superheroe.service';

@Component({
  selector: 'superhero-list',
  templateUrl: './superhero-list.component.html',
  styleUrls: ['./superhero-list.component.css']
})
export class SuperheroListComponent {

  heroes: ServicioSuperheroeService

  constructor() {
      this.heroes=new ServicioSuperheroeService();
      this.muestraHeroes=this.heroes.devuelveHeroes().subscribe();
   }

}
