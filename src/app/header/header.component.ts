import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  userData: any;

  constructor(private auth: AuthService, private userService: UserService){}

  ngOnInit(){
    this.getUserData();
  }

  loggedIn(): boolean{
    
    return this.auth.isLogged()
  }

  loggedout(){
    this.auth.clearToken();
  }

  getUserData() {
    this.userService.getUserData().subscribe(
      (userData) => {
        console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
      },
      (error) => {
        console.error('Erreur :', error);
      }
    );
  }

  isAdmin(): boolean {
    let roles = this.auth.getUserRole();
    if(roles){

      for(let i = 0; i<roles.length; i++){
        if(roles[i] === "ROLE_ADMIN"){
          return true;
        }
      }
      return false;
    }
    return false;
  }

}
