import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioAuthService {

  private _permitirAuth:Boolean;
  private _suscr:BehaviorSubject<Boolean>;

  constructor() {
    this._permitirAuth=false;
    this._suscr=new BehaviorSubject(this._permitirAuth);
  }
  
  get permiteAuth() {
    return this._permitirAuth;
  }

  public devuelveAuth() : Observable<Boolean> {
    return this._suscr.asObservable();
  }

  public actualizaAuth() {
    this._permitirAuth=!this._permitirAuth;
    this._suscr.next(this.permiteAuth);
  }
}
