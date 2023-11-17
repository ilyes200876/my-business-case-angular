import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private route: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.auth.getToken();
    if(token !== null){
      let clone = request.clone({
        headers : request.headers.set('Authorization', 'bearer ' + token)
      })
      
      return next.handle(clone).pipe(
        catchError(error => {
          console.log(error)
          if(error.status === 401){
            this.auth.clearToken()
            this.route.navigate(['/login']);
          }
          return throwError('Session Expired')
        })
      );
  }
  return next.handle(request);
  } 
  
}


export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true,
};
