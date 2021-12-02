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
      new Entrada('Hola','adasfasdfafdf', new Date().toUTCString()),
      new Entrada('wefefwe','wefwefwefwef', new Date().toUTCString()),
      new Entrada('sdfsdfafd','retrefdsgdsg', new Date().toUTCString()),
      new Entrada('ergrthfghdh','rtyrhgfdhtrh', new Date().toUTCString())
    )
    this._suscr=new BehaviorSubject(this._entradasEscritas);
  }

  public devuelveEntradas() : Observable<Entrada[]>{
    return this._suscr.asObservable();
  }

  public addEntrada(titulo:string, contenido:String){
    this._entradasEscritas.push(new Entrada(titulo, contenido, new Date().toUTCString()));
    this._suscr.next([...this._entradasEscritas]);
  }

  public removeEntrada(id:number){
    this._entradasEscritas=this._entradasEscritas.filter(entrada => entrada.id!==id);
    this._suscr.next([...this._entradasEscritas]);
  }

  public modEntrada(id:number, titulo:string, contenido:String){
    let indiceCambiar=this._entradasEscritas.findIndex(entrada => entrada.id===id);
    this._entradasEscritas[indiceCambiar]=new Entrada(titulo, contenido, new Date().toUTCString());
    this._suscr.next([...this._entradasEscritas]);
  }
}
