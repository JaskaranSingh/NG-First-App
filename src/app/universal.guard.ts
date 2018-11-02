import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<any> {

  constructor(private route: Router) {}

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot): boolean {      
        return window.confirm('Are you sure?');
  }

  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let allow = false;
      if(sessionStorage.getItem('logged') == 'true')
        allow = true;
      else
        this.route.navigate(['login', 'Please Login To Access.']);
    return allow;
  }
}
