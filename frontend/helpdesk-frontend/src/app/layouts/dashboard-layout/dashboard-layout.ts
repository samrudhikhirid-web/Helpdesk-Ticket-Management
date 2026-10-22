import { Component ,OnInit} from '@angular/core';
import {Router,RouterOutlet,RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  imports: [RouterOutlet,RouterLink,CommonModule],
  selector: 'app-dashboard-layout',
  styleUrl: './dashboard-layout.css',
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout implements OnInit {
    constructor(
    private router: Router
    ){}
  role: string = '';

  ngOnInit(){

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    this.role = user.role;

    console.log("Role:", this.role);

  }
 logout(){

  const confirmLogout = confirm("Are you sure you want to logout?");

  if(confirmLogout){

    localStorage.removeItem("token");
    localStorage.removeItem("user")

    this.router.navigate(['/login'], { replaceUrl:true });

  }

}
}