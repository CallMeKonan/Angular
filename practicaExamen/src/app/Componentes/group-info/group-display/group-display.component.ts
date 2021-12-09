import { Component, EventEmitter, Output } from '@angular/core';
import { Player } from 'src/app/Modelo/Class/player';
import { PlayerService } from 'src/app/Modelo/player-service.service';

@Component({
  selector: 'group-display',
  templateUrl: './group-display.component.html',
  styleUrls: ['./group-display.component.css']
})
export class GroupDisplayComponent {

  private _players:Player[];
  private color:boolean;
  @Output() export:EventEmitter<boolean>;

  constructor(private playerService:PlayerService) {
    this.color=false;
    this.export=new EventEmitter();
    this._players=new Array();
    playerService.getPlayers().subscribe( players => this._players=players );
  }

  public delPlayer(id:number){
    this.playerService.removePlayer(id);
  }

  public changeDivColor() {
    this.color=!this.color;
    this.export.emit(this.color);
  }

  get players() {
    return this._players;
  }

}
