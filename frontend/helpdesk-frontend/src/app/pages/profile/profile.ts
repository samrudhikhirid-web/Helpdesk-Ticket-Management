import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service/user.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [
    CommonModule,
    FormsModule,
    DatePipe
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  editMode = false;
  user:any = {};
  oldUser:any={};

  constructor(
    private userService: UserService,
     private cdr: ChangeDetectorRef
  ){}
ngOnInit(){

  this.userService.getProfile()
  .subscribe({

    next:(response:any)=>{

      console.log("Profile Data:",response);

      this.user = response;
      this.oldUser={...response};
      this.cdr.detectChanges();
    },

    error:(error)=>{

      console.log(error);

    }

  });

}
 enableEdit(){

  console.log("Edit clicked");
  this.oldUser={...this.user};
  this.editMode = true;
}

  saveProfile(){

  const updatedData = {
    name: this.user.name,
    mobile: this.user.mobile
  };

  this.userService.updateProfile(updatedData)
  .subscribe({

    next:(response:any)=>{

      console.log("Update Response:", response);

      // update UI data
      this.user = response.user;

      console.log("New User Data:", this.user);

      this.editMode = false;
    },

    error:(error)=>{
      console.log(error);
    }

  });

}

 cancelEdit(){

  this.user={...this.oldUser};
  this.editMode = false;

}

}