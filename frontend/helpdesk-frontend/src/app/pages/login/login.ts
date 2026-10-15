import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup,FormControl,Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  imports: [ReactiveFormsModule,
    RouterLink
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  submitLogin() {
    if (this.loginForm.valid) {
      console.log('Form Submitted!', this.loginForm.value);
      // Here you can add your login logic, like calling an API
    } else {
      console.log('Form is invalid');
    }
}
}
