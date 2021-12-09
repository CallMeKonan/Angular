import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Player } from './Class/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private _suscr:BehaviorSubject<Player[]>;
  private _players:Player[];

  constructor() {
    this._players=new Array(
      new Player('Joel Montes García', 15),
      new Player('x', 15),
      new Player('x', 15),
      new Player('x', 15)
    );
    this._suscr=new BehaviorSubject(this._players);
  }

  public getPlayers() : Observable<Player[]> {
    return this._suscr.asObservable();
  }

  public addPlayer(name:string, age:number) {
    this._players.push(new Player(name, age));
    this._suscr.next([...this._players]);
  }

  public modPlayer(name:string, age:number) {
    this._players.push(new Player(name, age));
    this._suscr.next([...this._players]);
  }

  public removePlayer(id:number) {
    this._players=this._players.filter( player => player.id!==id );
    this._suscr.next([...this._players]);
  }

}
