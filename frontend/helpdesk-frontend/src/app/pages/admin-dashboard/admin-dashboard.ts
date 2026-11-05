import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from '../../admin.service/admin.service';
import { TicketService } from '../../ticket.service/ticket.service';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit{

  stats:any={};

  pendingTickets:any[]=[];

    chartOptions:any = {
      responsive: true,
      maintainAspectRatio: false
    };
    
  categoryChartData:any={
    labels:[],
    datasets:[
      {
        label:"Tickets",
        data:[]
      }
    ]
  };


  statusChartData:any={
    labels:[],
    datasets:[
      {
        label:"Status",
        data:[]
      }
    ]
  };

  lineMonthChartData:any={
    labels:[],
    datasets:[
      {
        label:"Monthly Tickets",
        data:[]
      }
    ]
  };

  priorityChartData:any={
    labels:[],
    datasets:[
      {
        label:"Priority",
        data:[]
      }
    ]
  };

  constructor(
    private adminService:AdminService,
    private ticketService:TicketService,
    private cdr:ChangeDetectorRef
  ){}


  ngOnInit(){

    this.loadStats();
    this.loadPendingTickets();
    this.loadCategoryChart();
    this.loadStatusChart();
    this.loadLineMonthChart();
    this.loadPriorityChart();
  }

  loadStats(){

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



 loadCategoryChart(){

  this.adminService.getCategoryData()
  .subscribe((data:any)=>{

    this.categoryChartData = {

      labels: data.map((item:any)=>item._id),

      datasets:[
        {
          label:"Tickets",
          data:data.map((item:any)=>item.count)
        }
      ]

    };

  });

}

  loadStatusChart(){

  this.adminService.getStatusData()
  .subscribe((data:any)=>{

    this.statusChartData = {

      labels:data.map((item:any)=>item._id),

      datasets:[
        {
          label:"Status",
          data:data.map((item:any)=>item.count)
        }
      ]

    };

  });

}

loadLineMonthChart()
{
  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  this.adminService.getMonthlyData()
  .subscribe((data:any)=>{
    this.lineMonthChartData = {
      labels:data.map((item:any)=>months[item._id.month] + ' ' + item._id.year),
      datasets:[
        {
          label:"Monthly Tickets",
          data:data.map((item:any)=>item.count)
        }
      ]
    }
  });
}
loadPriorityChart(){
  this.adminService.getPriorityData()
  .subscribe((data:any)=>{
    
    this.priorityChartData = {
    labels:data.map((item:any)=>item._id),
    datasets:[
      {
        label:"Priority",
        data:data.map((item:any)=>item.count)
      }
    ]
  }
});
}
}


