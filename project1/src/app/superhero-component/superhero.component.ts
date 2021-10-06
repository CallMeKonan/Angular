import { Component, Input } from '@angular/core';
import { SuperHero } from './SuperHero';

@Component({
  selector: 'SuperHero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.css']
})
export class SuperheroComponent {

    @Input('hero')
  hero!: SuperHero;

}
