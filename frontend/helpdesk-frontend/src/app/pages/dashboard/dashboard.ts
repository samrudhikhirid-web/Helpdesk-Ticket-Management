import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  username="User";
  tickets = [
    { id: 101,
      title: 'Login Issue',
      category: 'Technical',
      priority: 'High',
      status: 'Resolved',
      createdDate: '2023-08-01'
    },
    { id: 102,
      title: 'Payment Failure',
      category: 'Billing',
      priority: 'Medium',
      status: 'In Progress',
      createdDate: '2023-08-02'
    },
    { id: 103,
      title: 'Feature Request',
      category: 'General Inquiry',
      priority: 'Low',
      status: 'Resolved',
      createdDate: '2023-08-03'
    },
    {
      id: 104,
      title: 'Bug in Form Submission',
      category: 'Technical',
      priority: 'High',
      status: 'Close',
      createdDate: '2023-08-04'
    }
  ];
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
