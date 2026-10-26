import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminTicketService } from '../../admin-ticket.service/admin-ticket.service';

@Component({
 selector:'app-admin-tickets',
 imports:[CommonModule,FormsModule],
 templateUrl:'./admin-tickets.html',
 styleUrl:'./admin-tickets.css'
})
export class AdminTickets implements OnInit{

tickets:any[]=[];
selectedTicket:any = null;

constructor(
 private adminTicketService:AdminTicketService,
 private cdr: ChangeDetectorRef
){}
searchText=""
ngOnInit(){
 this.loadTickets();
}

filteredTickets(){

    return this.tickets.filter(ticket =>

      ticket.title
      .toLowerCase()
      .includes(this.searchText.toLowerCase())
    );
}

loadTickets(){

 this.adminTicketService.getAllTickets()
 .subscribe((response:any)=>{

   this.tickets=response;
   this.cdr.detectChanges();

 });

}

updateStatus(ticket:any){

  this.adminTicketService.updateTicketStatus(
    ticket._id,
    {
      status: ticket.status
    }
  )
  .subscribe({
    next:(response:any)=>{
      console.log(response);
      alert("Status Updated Successfully ✅");
      this.loadTickets();
    },

    error:(error)=>{
      console.log(error);
      alert(error.error.message);
    }
  });

}

viewDetails(ticket:any){
    this.selectedTicket = ticket;
}

closeDetails(){
    this.selectedTicket = null;
}

}