import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-ticket-list',
  styleUrl: './ticket-list.css',
  templateUrl: './ticket-list.html',
})
export class TicketList {
  tickets = [
    { id: 1, title: 'Login Issue', status: 'Open', priority: 'High' },
    { id: 2, title: 'Page not loading', status: 'Resolved', priority: 'Medium' },
    { id: 3, title: 'Feature request', status: 'Open', priority: 'Low' },
    { id: 4, title: 'Bug in form submission', status: 'Resolved', priority: 'High' },
    { id: 5, title: 'UI enhancement', status: 'Open', priority: 'Medium' }
  ];

  searchText='';

  filteredTickets() {
    return this.tickets.filter(ticket =>
      ticket.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      ticket.status.toLowerCase().includes(this.searchText.toLowerCase()) ||
      ticket.priority.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
