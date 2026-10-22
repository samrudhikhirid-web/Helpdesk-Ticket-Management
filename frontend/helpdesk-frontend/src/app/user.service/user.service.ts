import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn:'root'
})
export class UserService {
  private apiUrl="http://localhost:5000/api/users";

  constructor(private http: HttpClient){}

  registerUser(data:any)
  {
    return this.http.post(`${this.apiUrl}/register`,data);
  }
  loginUser(data:any)
  {
    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );
  }
  //Get logged in user profile

  getProfile()
  {
    return this.http.get(
      `${this.apiUrl}/profile`
    )
  }

  //update profile

  updateProfile(data:any)
  {
    return this.http.put(
      `${this.apiUrl}/profile`,
      data
    );
  }
}
