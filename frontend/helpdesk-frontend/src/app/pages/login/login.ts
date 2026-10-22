import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup,FormControl,Validators} from '@angular/forms';
import { Router ,RouterLink} from '@angular/router';
import { UserService } from '../../user.service/user.service';
import { CommonModule } from '@angular/common';
import { Auth } from '../../auth';
@Component({
  imports: [ReactiveFormsModule,CommonModule,RouterLink
  ],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  constructor(
    private userService:UserService,
    private router:Router,
    private auth:Auth
  ){}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  submitLogin()
  {
    console.log("Login Button clicked")
    if(this.loginForm.valid){
      console.log("Valid form")
      this.userService.loginUser(
        this.loginForm.value
      )
      .subscribe({
        next:(response:any)=>{
          console.log(response);

          // store token

          localStorage.setItem(
            "token",
            response.token
          );

          //update login status

          this.auth.login(response.token);

          // store user details

          localStorage.setItem(
            "user",
            JSON.stringify(response.user)
          );

          alert("Login Successful");

          if(response.user.role === "Admin"){
            this.router.navigate(['/admin-dashboard']);
          }
          else{
            this.router.navigate(['/dashboard']);
          }
        },

        error:(error)=>{

          alert(error.error.message);

        }


      });


    }
}

}


