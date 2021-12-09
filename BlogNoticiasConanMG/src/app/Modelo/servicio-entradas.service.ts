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
      new Entrada('Conan Blogger','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula cursus sapien nec ultrices. Vivamus a tempus erat. Nulla volutpat nibh tortor. Suspendisse sodales risus sed porta vehicula. Phasellus imperdiet augue eu nibh dapibus eleifend. Vivamus vel libero porta, bibendum est quis volutpat.', new Date().toUTCString()),
      new Entrada('Gille Blogger','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla et massa imperdiet volutpat ac vel erat. Fusce tristique nibh et consectetur molestie. Aliquam purus metus, luctus id orci vel, consequat luctus sapien. Praesent a leo at libero rutrum convallis ac et lorem. Sed viverra fusce.', new Date().toUTCString()),
      new Entrada('Sergio Blogger','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus dolor id urna eleifend, a vehicula nibh pretium. Mauris est odio, egestas suscipit tortor ac, feugiat egestas mi. Sed dapibus diam ut mauris luctus, vitae cursus ex egestas. Maecenas eros metus, commodo quis urna vitae turpis.', new Date().toUTCString()),
      new Entrada('Antonio Blogger','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare turpis odio, nec vehicula mi volutpat imperdiet. Aliquam eleifend efficitur iaculis. Aliquam vel massa eget sapien suscipit interdum. Fusce in dolor sed sem congue condimentum. Quisque et ornare erat. Nam in porta diam vivamus.', new Date().toUTCString())
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
