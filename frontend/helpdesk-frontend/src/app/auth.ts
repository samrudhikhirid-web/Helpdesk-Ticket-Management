import { Injectable ,signal} from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class Auth {
    isLoggedIn = signal(false)

    constructor()
    {
        const token=localStorage.getItem("token");
        if(token)
        {
            this.isLoggedIn.set(true);
        }
    }
    login(token:string)
    {
        localStorage.setItem("token",token);
        this.isLoggedIn.set(true)
    }
    logout()
    {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.isLoggedIn.set(false)
    }
}
