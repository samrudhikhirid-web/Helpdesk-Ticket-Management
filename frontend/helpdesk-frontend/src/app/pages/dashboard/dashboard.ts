import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../ticket.service/ticket.service';


@Component({
  imports: [CommonModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit{
  constructor(private ticketService: TicketService){}
  username="User";
  tickets :any[] = [];
  ngOnInit() {
      this.ticketService.getMyTickets().subscribe({
        next:(response:any)=>{
          console.log(response);
          this.tickets=response;
        },
        error:(error)=>{
          console.log(error);
        }
      })
  }
  getTotalTickets() {
    return this.tickets.length;
  }
  
  getOpenTickets() {
    return this.tickets.filter(ticket => ticket.status === 'Open').length;
  }
  getResolvedTickets() {
    return this.tickets.filter(ticket => ticket.status === 'Resolved').length;
  }
  getInProgressTickets() {
    return this.tickets.filter(ticket => ticket.status === 'In Progress').length;
  }
  getClosedTickets() {
    return this.tickets.filter(ticket => ticket.status === 'Close').length;
  }
}
