import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  selector: 'app-create-ticket',
  styleUrl: './create-ticket.css',
  templateUrl: './create-ticket.html',
})
export class CreateTicket {

  ticketForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000)
    ]),
    category:new FormControl('', [
    Validators.required
    ]),
    priority: new FormControl('', [
      Validators.required
    ])

  });
  submitTicket() {
    
    if (this.ticketForm.valid) {

      console.log("Ticket submitted");
      console.log(this.ticketForm.value);

      alert("Ticket created successfully!");
    }
    else {
      console.log("Form is invalid");
      alert("Please fill all required fields correctly.");
    }
}
}
