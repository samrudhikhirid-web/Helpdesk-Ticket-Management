import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class CategoryService {

    constructor(
    private http:HttpClient
    ){}

getCategories(){
      const token = localStorage.getItem("token");
      const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
      });

      return this.http.get(
      "http://localhost:5000/api/categories/all",
      {headers}
      );
  }

addCategory(data:any){

      const token = localStorage.getItem("token");
      const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
      });

      return this.http.post(
      "http://localhost:5000/api/categories/add",
      data,
      {headers}
      );

  }

deleteCategory(id:string){
      const token = localStorage.getItem("token");
      const headers = new HttpHeaders({
        Authorization:`Bearer ${token}`
      });

      return this.http.delete(

      `http://localhost:5000/api/categories/delete/${id}`,{headers}

      );
}

updateCategory(id:string,data:any){

      const token=localStorage.getItem("token");
      const headers=new HttpHeaders({

      Authorization:`Bearer ${token}`
      });
      return this.http.put(
      `http://localhost:5000/api/categories/update/${id}`,
      data,
      {headers}
      );

  }
}