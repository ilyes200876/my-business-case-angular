import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private route: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
    // !! token;
    this.route.navigate(['/profile']);
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    console.log(token);
    return !!token
  }

  // getIslogged(){
  //   if(localStorage.getItem('token')){

  //   }
  // }

  clearToken(): void{
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

}
