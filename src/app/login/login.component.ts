import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { TokenInterface } from '../interfaces/token-interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private loginService: LoginService,private auth: AuthService){}

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  handleSubmit(){
    
    this.loginService.login(this.form.value).subscribe((data: TokenInterface)=>{
      console.log(data.token)
      this.auth.saveToken(data.token)
    },
      err=>console.log(err)
    )
  }

}
