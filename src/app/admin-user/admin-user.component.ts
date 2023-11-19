import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit{

  users: UserInterface[] = [];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getAllUsers().subscribe(dataUser => {
      this.users = dataUser;
      console.log(this.users);
    });
  }

}
