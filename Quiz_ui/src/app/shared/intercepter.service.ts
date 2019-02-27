import { AuthService } from './auth.service';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorServiceService implements HttpInterceptor {


  /**
   * injecting injector to get token 
   */
  constructor(private injector: Injector) { }
  intercept(req, next)
  {
    // let authService=this.injector.get(AuthService).getToken();
    let authService = localStorage.getItem('token')
    /**
     * we have to write promise here to check token is there or not
     */
    
      /**
      * setting token to the header
      */

    let tokenizedRequest =req.clone({
      setHeaders: {
        Authorization :  `Bearer ${authService}`
        
      }
         
      
    });
   
    return next.handle(tokenizedRequest)
  }


}
