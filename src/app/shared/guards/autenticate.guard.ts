import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticateGuard implements CanActivate, CanActivateChild {

  constructor(private auth:AuthorizationService, private router:Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.validate_login()){ return true;}
    else {
      console.log("Acceso no autorizado");
      this.router.navigate(['/login']);
      return false;
    } 
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(next, state);
  }

}
