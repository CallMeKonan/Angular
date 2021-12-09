import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './Componentes/frontpage/frontpage.component';
import { GroupInfoComponent } from './Componentes/group-info/group-info.component';
import { PlayerDetailsComponent } from './Componentes/player-details/player-details.component';

const routes: Routes = [
  { path:'', redirectTo:'Frontpage', pathMatch:'full' },
  { path:'Frontpage', component:FrontpageComponent },
  { path:'GroupInfo', component:GroupInfoComponent },
  { path:'PlayerDetails', component:PlayerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
