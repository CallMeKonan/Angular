import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioOscuroService {

  private _oscuro:Boolean;
  private _suscr:BehaviorSubject<Boolean>;

  constructor() {
    this._oscuro=false;
    this._suscr=new BehaviorSubject(this._oscuro);
  }

  public devuelveTema() : Observable<Boolean> {
    return this._suscr.asObservable();
  }

  public cambiaTema(){
    this._oscuro=!this._oscuro;
    this._suscr.next(this._oscuro);
  }
}
