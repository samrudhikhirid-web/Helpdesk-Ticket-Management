import { Component } from '@angular/core';
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
export class AdminDashboard {

  stats = [
    {
      title:"Total Tickets",
      count:120
    },
    {
      title:"Open Tickets",
      count:40
    },
    {
      title:"In Progress",
      count:35
    },
    {
      title:"Resolved",
      count:45
    }
  ];

}