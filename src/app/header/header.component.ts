import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  userData: UserInterface | undefined;

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
      (user) => {
        this.userData = user;
        console.log('Données de l\'utilisateur connecté :', user);
        console.log(user?.firstName);
        console.log(user?.lastName);
        console.log(user?.nickname);
        console.log(user?.gender);
        console.log(user?.email);
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
