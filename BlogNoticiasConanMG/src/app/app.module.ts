import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Rutas/app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './Componentes/form-login/form-login.component';
import { FormEntradasComponent } from './Componentes/form-entradas/form-entradas.component';
import { ListEntradasComponent } from './Componentes/list-entradas/list-entradas.component';
import { EntradasComponent } from './Componentes/entradas/entradas.component';
import { ServicioEntradasService } from './Modelo/servicio-entradas.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicioOscuroService } from './Modelo/servicio-oscuro.service';
import { ServicioAuthService } from './Modelo/servicio-auth.service';

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
    ServicioEntradasService,
    ServicioOscuroService,
    ServicioAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
