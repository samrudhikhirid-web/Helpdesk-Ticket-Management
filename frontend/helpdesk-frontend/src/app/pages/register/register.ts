import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service/user.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

    constructor(
    private userService: UserService,
    private router: Router
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


    this.userService.registerUser(
      this.registerForm.value
    )
    .subscribe({  //angular waits for backend response

      next:(response:any)=>{

        console.log(response);

        alert("Registration Successful ✅");
        this.router.navigate(['/login'])
      },


      error:(error)=>{

        console.log(error);

        alert(error.error.message);

      }

    });


  }
  else{

    console.log("Form is invalid");

  }

}


}