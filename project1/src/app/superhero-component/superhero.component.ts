import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from './SuperHero';

@Component({
  selector: 'SuperHero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent {

    @Input('hero') hero!: SuperHero;
    @Output() Servicio = new EventEmitter<SuperHero>();

    mandaHeroe(heroeServicio:SuperHero){
      this.Servicio.emit(heroeServicio);
    }

}
