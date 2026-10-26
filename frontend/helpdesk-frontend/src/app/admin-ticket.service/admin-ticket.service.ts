import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
 providedIn:'root'
})
export class AdminTicketService {

        constructor(
        private http:HttpClient
        ){}

        getAllTickets(){

        const token = localStorage.getItem("token");
        const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
        });

        return this.http.get(
        "http://localhost:5000/api/tickets/all",
        {headers}
        );

        }   // ✅ close getAllTickets here


        updateTicketStatus(id:string,data:any){
            return this.http.put(
            `http://localhost:5000/api/tickets/update-status/${id}`,
            data
            );
            }

}