import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YGuard implements CanActivate {
  constructor(private _router:Router){}
  canActivate():  boolean {

if(localStorage.getItem('user')){
  console.log("true guard");
  
  return true;
}
else{
  console.log("false guard");
this._router.navigate(['/register'])
  return false;
}

  
  }
}
