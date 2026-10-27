import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class TicketService {
  private apiUrl="http://localhost:5000/api/tickets";

  constructor(private http:HttpClient){}

  createTicket(data:any)
  {
    return this.http.post(
      `${this.apiUrl}/create`,data
    );
  }
  getMyTickets()
  {
    return this.http.get(`${this.apiUrl}/my`);
  }
  updateTicketStatus(id:string, data:any){
    return this.http.put(
    `http://localhost:5000/api/tickets/update-status/${id}`,
    data
    );
    }
    getPendingTickets(){
      return this.http.get(
      'http://localhost:5000/api/tickets/pending'
      );

      }
}
