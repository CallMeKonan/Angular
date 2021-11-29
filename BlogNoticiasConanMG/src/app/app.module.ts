import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormLoginComponent } from './src/form-login/form-login.component';
import { FormEntradasComponent } from './src/form-entradas/form-entradas.component';
import { ListEntradasComponent } from './src/list-entradas/list-entradas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    FormEntradasComponent,
    ListEntradasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
