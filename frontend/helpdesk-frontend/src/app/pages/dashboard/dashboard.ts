
import { CommonModule } from '@angular/common';
import { TicketService } from '../../ticket.service/ticket.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})

export class Dashboard implements OnInit{
  constructor(
  private ticketService: TicketService,
  private cdr: ChangeDetectorRef
){}
  username="User";
  tickets :any[]= [];
  ngOnInit() {
      this.ticketService.getMyTickets().subscribe({
        next:(response:any)=>{
          console.log("Before:", this.tickets);
          this.tickets=response;
          
          console.log("After:", this.tickets);
          this.cdr.detectChanges(); //we manually told Angular The data has changed. Check the component again and update the HTML.
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
 
  getClosedTickets() {
    return this.tickets.filter(ticket => ticket.status === 'Closed').length;
  }
}

