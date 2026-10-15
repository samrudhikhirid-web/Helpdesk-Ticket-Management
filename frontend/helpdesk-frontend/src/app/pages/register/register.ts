import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service/user.service';


@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

    constructor(
    private userService: UserService
  ){}

  registerForm = new FormGroup({

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$')
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])

  });

  submitRegister(){

    if(this.registerForm.valid){

      console.log("Registration Data:");
      console.log(this.registerForm.value);

    }
    else{

      console.log("Form is invalid");

    }

}


}