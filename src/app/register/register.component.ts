import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router){}

  public form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    birthDate: new FormControl(''),
    gender: new FormControl(''),
    street: new FormControl(''),
    zipCode: new FormControl(''),
    department: new FormControl(''),
    country: new FormControl(''),
    password: new FormControl(''),
    profilePic: new FormControl('')
  })

  register(){
    if(this.form.valid){
      let user: UserInterface = {
        id:0,
        roles: [],
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        nickname: this.form.value.username,
        gender: this.form.value.gender,
        password: this.form.value.password,
        birthDate: this.form.value.birthDate,
        profilePic: this.form.value.profilePic,
        address: 
          {
            street: this.form.value.street,
            zipCode: this.form.value.zipCode,
            department: this.form.value.department,
            country: this.form.value.country
          },
        nfts: [],
      };

      this.userService.createUser(user).subscribe(response => {
        this.form.reset();
        console.log(user);
        this.router.navigate(['/login']);
      });
    }
  }

}
