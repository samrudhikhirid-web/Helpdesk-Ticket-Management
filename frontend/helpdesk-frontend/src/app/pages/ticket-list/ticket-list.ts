import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TicketService } from '../../ticket.service/ticket.service';
import { CategoryService } from '../../category.service/category.service';

@Component({
  selector: 'app-ticket-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.css'
})
export class TicketList implements OnInit {

  constructor(
    private ticketService: TicketService,
    private categoryService:CategoryService,
    private cdr: ChangeDetectorRef
  ) {}

  searchText = "";
  selectedStatus = "";
  selectedPriority = "";
  selectedCategory = "";
  selectedTicket:any = null;

  tickets:any[] = [];
  categories:any[]=[];

  ngOnInit(){
    
    this.loadCategories();
    this.ticketService.getMyTickets()
    .subscribe({

      next:(response:any)=>{

        console.log("Tickets From Backend:", response);

        this.tickets = response;
        this.cdr.detectChanges();
      },

      error:(error)=>{

        console.log(error);

      }

    });

  }
  loadCategories() {

  this.categoryService.getCategories()
    .subscribe((response: any) => {

      this.categories = response;

    });

}
  filteredTickets(){

    return this.tickets.filter(ticket =>

      ticket.title
      .toLowerCase()
      .includes(this.searchText.toLowerCase())
      &&
      (this.selectedStatus === "" ||
       ticket.status === this.selectedStatus)
      &&
      (this.selectedPriority === "" ||
       ticket.priority === this.selectedPriority)
      &&
      (this.selectedCategory === "" ||
       ticket.category === this.selectedCategory)

    );

  }
  viewDetails(ticket:any){
    this.selectedTicket = ticket;
  }
  closeDetails(){
    this.selectedTicket = null;
  }

}