import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Entrada } from './entrada';

@Injectable({
  providedIn: 'root'
})
export class ServicioEntradasService {

  private _entradasEscritas:Array<Entrada>;
  private _suscr:BehaviorSubject<Entrada[]>;

  constructor() {
    this._entradasEscritas=new Array<Entrada>(
      new Entrada('Hola','adasfasdfafdf', '01/09/2021'),
      new Entrada('wefefwe','wefwefwefwef', '01/10/2021'),
      new Entrada('sdfsdfafd','retrefdsgdsg', '01/11/2021'),
      new Entrada('ergrthfghdh','rtyrhgfdhtrh', '01/12/2021')
    )
    this._suscr=new BehaviorSubject(this._entradasEscritas);
  }

  public devuelveEntradas() : Observable<Entrada[]>{
    return this._suscr.asObservable();
  }

  public addEntrada(nuevaEntrada:Entrada){
    this._entradasEscritas.push(nuevaEntrada);
    this._suscr.next([...this._entradasEscritas]);
  }

  public removeEntrada(id:number){
    this._entradasEscritas=this._entradasEscritas.filter(entrada => entrada.id===id);
    this._suscr.next([...this._entradasEscritas]);
  }

  public modEntrada(id:number, titulo:string, contenido:string, fechaPubl:string){
    let indiceCambiar=this._entradasEscritas.findIndex(entrada => entrada.id===id);
    this._entradasEscritas[indiceCambiar]=new Entrada(titulo, contenido, fechaPubl);
    this._suscr.next([...this._entradasEscritas]);
  }
}
