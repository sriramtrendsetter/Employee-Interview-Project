import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Injectable()
export class RouterService {
    constructor(private _router:Router){

    }
   redirectToQuiz()
   {
    this._router.navigate(["quiz"])
   }
   redirectToRegister(){
       this._router.navigate(['register'])
   }

   directToResult(){
       this._router.navigate(['result'])
   }
 
   directToLogin()
   {
       this._router.navigate(['login'])
   }


}