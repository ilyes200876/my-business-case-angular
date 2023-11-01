import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  // isLogIn: boolean;

  constructor(private auth: AuthService){}

  ngOnInit(){
    // this.loggedIn();
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

}
