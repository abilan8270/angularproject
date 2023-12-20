import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    email: new  FormControl('',[Validators.required,Validators.email])
  })
  get email(){
    return this.loginForm.get('email')
  }
  onsubmit(){
    console.log(this.loginForm.value)
  }

}
