import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasComponent } from '../src/entradas/entradas.component';
import { FormLoginComponent } from '../src/form-login/form-login.component';
import { AuthGuard } from './guard.guard';

const routes: Routes = [
  { path: '', redirectTo:'loginForm', pathMatch:'full'},
  { path: 'loginForm', component: FormLoginComponent },
  { path: 'entradas', canActivate: [AuthGuard], component: EntradasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
