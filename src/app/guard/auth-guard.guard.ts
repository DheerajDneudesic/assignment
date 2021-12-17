import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isRole(route);
    }
  
    private isRole(route: ActivatedRouteSnapshot): boolean {
      const roled = localStorage.getItem('role')
      const role= [roled];
      const expected = route.data.roles;
      const roleMatch = role.findIndex(roles => expected.indexOf(roles) !== -1);
      return roleMatch < 0 ? false: true;
    }
  
}
