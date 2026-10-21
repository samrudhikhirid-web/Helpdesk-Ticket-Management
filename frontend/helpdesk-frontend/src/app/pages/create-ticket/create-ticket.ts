import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../ticket.service/ticket.service';

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

  constructor(
    private ticketService:TicketService
  ){}

  ticketForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)
    ]),
    description: new FormControl('', [
      Validators.required,   
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

      this.ticketService.createTicket(
        this.ticketForm.value
      ).subscribe({
          next:(response:any)=>{
            console.log(response);
            alert("Ticket created successfully")
            this.ticketForm.reset() //reset ticket
          },
           error:(error)=>{
              console.log(error);
              console.log(error.error);              
              alert(JSON.stringify(error.error)
              )
           }
      });
    }
    else {
      console.log("Form is invalid");
      alert("Please fill all required fields correctly.");
    }
}
}
