import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class AdminService {


  private apiUrl="http://localhost:5000/api/admin";


  constructor(
    private http:HttpClient
  ){}



  private getHeaders(){

    const token = localStorage.getItem("token");

    return new HttpHeaders({
      Authorization:`Bearer ${token}`
    });

  }



  // Dashboard Cards

  getStats(){

    return this.http.get(
      `${this.apiUrl}/stats`,
      {
        headers:this.getHeaders()
      }
    );

  }



  // Category Chart

  getCategoryData(){

    return this.http.get(
      `${this.apiUrl}/category`,
      {
        headers:this.getHeaders()
      }
    );

  }



  // Priority Chart

  getPriorityData(){

    return this.http.get(
      `${this.apiUrl}/priority`,
      {
        headers:this.getHeaders()
      }
    );

  }



  // Monthly Trend Chart

  getMonthlyData(){

    return this.http.get(
      `${this.apiUrl}/monthly`,
      {
        headers:this.getHeaders()
      }
    );

  }



  // Users Table

  getUsers(){

    return this.http.get(
      `${this.apiUrl}/users`,
      {
        headers:this.getHeaders()
      }
    );

  }
  getStatusData(){

  return this.http.get(
    `${this.apiUrl}/status`,
    {
      headers:this.getHeaders()
    }
  );

}

}