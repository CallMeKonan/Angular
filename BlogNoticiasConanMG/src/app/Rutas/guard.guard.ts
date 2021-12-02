import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ServicioAuthService } from '../Modelo/servicio-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private comprobador!:Boolean;
  private suscripcion:Subscription;

  constructor(private servicioAuth:ServicioAuthService, private router:Router){
    this.suscripcion=servicioAuth.devuelveAuth().subscribe( prueba => this.comprobador=prueba );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.comprobador) {
        return this.router.navigate(['/login']).then(() => false);
      }
    return true;
  }
  
}
