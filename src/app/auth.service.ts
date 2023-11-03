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
    return !!token
  }

  clearToken(): void{
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  getLoggedInUseremail(): any {
    const token = localStorage.getItem('token');
    if(token){
      const tokenParts = token.split('.');
      if(tokenParts.length === 3){
        const tokenPayload = JSON.parse(atob(tokenParts[1]));
        console.log(tokenPayload);
        let userEmail = tokenPayload.username;
        console.log(userEmail);
        
        return userEmail;
      }
    }
    return null;
  }

  getUserRole(){
    const token = localStorage.getItem('token');
    if(token){
      const tokenParts = token.split('.');
      if(tokenParts.length === 3){
        const tokenPayload = JSON.parse(atob(tokenParts[1]));
        let userRole = tokenPayload.roles;
        return userRole;
      }
      return null;
    }
  }

}
