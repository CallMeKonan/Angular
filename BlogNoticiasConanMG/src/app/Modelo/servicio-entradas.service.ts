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
      new Entrada('','',new Date().toLocaleDateString()),
      new Entrada('','',new Date().toLocaleDateString()),
      new Entrada('','',new Date().toLocaleDateString()),
      new Entrada('','',new Date().toLocaleDateString())
    )
    this._suscr=new BehaviorSubject(this._entradasEscritas);
  }

  public addEntrada(nuevaEntrada:Entrada){
    this._entradasEscritas.push(nuevaEntrada);
    this._suscr.next([...this._entradasEscritas]);
  }

  public removeEntrada(id:number){
    this._entradasEscritas=this._entradasEscritas.filter(entrada => entrada.id===id);
    this._suscr.next([...this._entradasEscritas]);
  }

  public modEntrada(id:number, titulo:string, contenido:string){
    let indiceCambiar=this._entradasEscritas.findIndex(entrada => entrada.id===id);
    this._entradasEscritas[indiceCambiar]=new Entrada(titulo, contenido, new Date().toLocaleDateString());
    this._suscr.next([...this._entradasEscritas]);
  }
}
