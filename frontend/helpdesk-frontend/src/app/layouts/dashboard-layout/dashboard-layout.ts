import { Component } from '@angular/core';
import {RouterOutlet,RouterLink} from '@angular/router';
@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-dashboard-layout',
  styleUrl: './dashboard-layout.css',
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {}
