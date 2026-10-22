import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ticket-details',
  imports: [
    CommonModule
  ],
  templateUrl: './ticket-details.html',
  styleUrl: './ticket-details.css'
})
export class TicketDetails {


  ticket = {

    id: 101,
    title: "Login Issue",
    description:
    "User is unable to login into the application after password reset.",
    category: "Access",
    priority: "High",
    status: "Open",
    createdBy: "user@gmail.com",
   
    createdDate: "15-10-2026",
    updatedDate: "15-10-2026"
  };


}