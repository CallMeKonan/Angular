import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuperheroComponent } from './superhero-component/superhero.component';
import { SuperheroListComponent } from './superhero-list/superhero-list.component';
import { SuperheroFormComponent } from './superhero-form/superhero-form.component';
import { AppComponent } from './app.component';
import { FiltroMalsonantePipe } from './Tuberias/filtro-malsonante.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SuperheroComponent,
    SuperheroListComponent,
    SuperheroFormComponent,
    AppComponent,
    FiltroMalsonantePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
