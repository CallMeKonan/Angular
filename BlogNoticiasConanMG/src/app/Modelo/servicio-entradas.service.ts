import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Entrada } from './entrada';

@Injectable({
  providedIn: 'root'
})
export class ServicioEntradasService {

  private _entradasEscritas:Array<Entrada>;
  private _suscr:BehaviorSubject<Entrada[]>;

  constructor() {
    this._entradasEscritas=new Array<Entrada>(
      new Entrada('','',new Date()),
      new Entrada('','',new Date()),
      new Entrada('','',new Date()),
      new Entrada('','',new Date())
    )
    this._suscr=new BehaviorSubject(this._entradasEscritas);
  }

  public addEntrada(nuevaEntrada:Entrada){
    this._entradasEscritas.push(nuevaEntrada);
    this._suscr.next([...this._entradasEscritas]);
  }

  public removeEntrada(id:number){
    this._entradasEscritas.filter()
  }
}
