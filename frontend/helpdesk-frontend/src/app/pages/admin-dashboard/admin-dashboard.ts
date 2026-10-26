import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from '../../admin.service/admin.service';
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
  constructor(
    private adminService:AdminService,
    private cdr: ChangeDetectorRef
  ){}
  ngOnInit(){

    this.adminService.getStats()
    .subscribe((response:any)=>{

      this.stats=response;
      this.cdr.detectChanges();
    });
  }
}