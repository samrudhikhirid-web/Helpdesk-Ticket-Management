import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    FormsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  editMode = false;

  user = {
    name: "Samruddhi",
    email: "samrudhikhirid@gmail.com",
    mobile: "9876543210",
    role: "User",
    createdDate: "15-10-2026"
  };

  enableEdit(){
    this.editMode = true;
  }

  saveProfile(){
    this.editMode = false;
    console.log(this.user);
  }

  cancelEdit(){
    this.editMode = false;
  }

}