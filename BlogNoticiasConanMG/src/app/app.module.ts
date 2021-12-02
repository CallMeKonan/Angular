import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Rutas/app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './src/form-login/form-login.component';
import { FormEntradasComponent } from './src/form-entradas/form-entradas.component';
import { ListEntradasComponent } from './src/list-entradas/list-entradas.component';
import { EntradasComponent } from './src/entradas/entradas.component';
import { ServicioEntradasService } from './Modelo/servicio-entradas.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormEntradasComponent,
    ListEntradasComponent,
    EntradasComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ServicioEntradasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
