import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fromcomponent',
  templateUrl: './fromcomponent.component.html',
  styleUrls: ['./fromcomponent.component.css']
})
export class FromcomponentComponent {
  contactForm = new FormGroup({
    firstName :  new FormControl('',[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl('',[Validators.required,Validators.maxLength(8)]),
    email: new  FormControl('',[Validators.required,Validators.email]),
    age :  new  FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^[0-9]+$')]),
    gender:new FormControl('',[Validators.required]),
    marriagestatus:new FormControl('',[Validators.requiredTrue]),
    city:new FormControl('1',[Validators.required]),
    village:new FormControl('1',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+[0-9]+$')])

  })
  onsubmit(){
    console.log(this.contactForm.value)
  }
  get lastname(){
    return this.contactForm.get('lastName')
  }
  get email(){
    return this.contactForm.get('email')
  }
  get age(){
    return this.contactForm.get('age')
  }
  get firstname(){
    return this.contactForm.get('firstName')
  }
  get phnum(){
    return this.contactForm.get('phoneNumber')
  }
  get gender(){
    return this.contactForm.get('gender')
  }
  get marriagestatus(){
    return this.contactForm.get('marriagestatus')
  }
  get city(){
    return this.contactForm.get('city')
  }
  get village(){
    return this.contactForm.get('village')
  }
  get password(){
    return this.contactForm.get('password')
  }

}
