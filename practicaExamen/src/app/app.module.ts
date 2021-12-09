import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './Componentes/frontpage/frontpage.component';
import { GroupInfoComponent } from './Componentes/group-info/group-info.component';
import { GroupFormComponent } from './Componentes/group-info/group-form/group-form.component';
import { GroupDisplayComponent } from './Componentes/group-info/group-display/group-display.component';
import { PlayerDetailsComponent } from './Componentes/player-details/player-details.component';
import { SwearWordPipePipe } from './Modelo/swear-word-pipe.pipe';
import { LightButtonDirective } from './Modelo/light-button-directive.directive';
import { NavigationComponent } from './Componentes/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    GroupInfoComponent,
    GroupFormComponent,
    GroupDisplayComponent,
    PlayerDetailsComponent,
    SwearWordPipePipe,
    LightButtonDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
