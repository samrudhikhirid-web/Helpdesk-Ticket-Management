import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from '../../admin.service/admin.service';
import { TicketService } from '../../ticket.service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit{
  stats:any={}
  pendingTickets:any[]=[];
  constructor(
    private adminService:AdminService,
    private ticketService:TicketService,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(){
    this.loadPendingTickets();
    this.adminService.getStats()
    
    .subscribe((response:any)=>{

      this.stats=response;
      this.cdr.detectChanges();
    });
  }
  loadPendingTickets(){

this.ticketService.getPendingTickets()
.subscribe((data:any)=>{

this.pendingTickets=data;

});

}
}