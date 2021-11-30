import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasComponent } from './src/entradas/entradas.component';
import { FormLoginComponent } from './src/form-login/form-login.component';

const routes: Routes = [
  { path: 'loginForm', component: FormLoginComponent },
  { path: 'entradas', component: EntradasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
