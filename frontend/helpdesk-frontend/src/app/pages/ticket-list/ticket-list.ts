import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ticket-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList {


  searchText = "";


  tickets = [

    {
      id: 101,
      title: "Login Issue",
      category: "Access",
      priority: "High",
      status: "Open",
      createdBy: "user@gmail.com",
      assignedTo: "Admin",
      createdDate: "15-10-2026"
    },


    {
      id: 102,
      title: "Software Installation Problem",
      category: "Software",
      priority: "Medium",
      status: "In Progress",
      createdBy: "sam@gmail.com",
      assignedTo: "Employee",
      createdDate: "14-10-2026"
    },


    {
      id: 103,
      title: "Laptop Hardware Issue",
      category: "Hardware",
      priority: "Low",
      status: "Resolved",
      createdBy: "abc@gmail.com",
      assignedTo: "Employee",
      createdDate: "10-10-2026"
    }


  ];



  filteredTickets(){


    return this.tickets.filter(ticket =>


      ticket.title
      .toLowerCase()
      .includes(this.searchText.toLowerCase())


    );


  }


}