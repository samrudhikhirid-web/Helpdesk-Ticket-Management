import { Component } from '@angular/core';
import {RouterOutlet,RouterLink} from '@angular/router';
@Component({
  imports: [RouterOutlet,RouterLink],
  selector: 'app-dashboard-layout',
  styleUrl: './dashboard-layout.css',
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {
  role = '';

ngOnInit(){

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  console.log("Logged User:", user);

  this.role = user.role;

  console.log("Role:", this.role);

}
}
