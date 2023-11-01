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
    // if(this.auth.isLogged() === true){
    //   return this.isLogIn = true;
    // }else{
    //   return this.isLogIn = false;
    // }
    return this.auth.isLogged()
  }

  loggedout(){
    this.auth.clearToken();
    // this.isLogIn = false;
  }

  getUserData() {
    this.userService.getUserData().subscribe(
      (userData) => {
        console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }

}
