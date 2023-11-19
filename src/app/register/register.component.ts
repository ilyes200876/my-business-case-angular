import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from 'src/services/user/user.service';
import { UserInterface } from '../interfaces/user-interface';
// import { UserInterface } from '../interfaces/user-interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private userService: UserService){}

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
      // const bcrypt = require('bcrypt');
      // let formattedBirthDate = this.datePipe.transform(this.form.value.birth, 'dd/MM/yyyy');
      // let hashedPassword = bcrypt.hashSync(this.form.value.password, 10);
      let user: UserInterface = {
        roles: [],
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        email: this.form.value.email,
        nickname: this.form.value.username,
        gender: this.form.value.gender,
        password: this.form.value.email,
        birthDate: this.form.value.birthDate,
        profilePic: this.form.value.profilePic,
        address: [
          {
            street: this.form.value.street,
            zipCode: this.form.value.zipCode,
            department: this.form.value.department,
            country: this.form.value.country
          }
        ]
      };

    this.userService.createUser(user).subscribe(response => {
      this.form.reset();
      console.log(user);
    });

    }
  }

}
