import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  login(userName:string,email:string,password:string){
    localStorage.setItem('userName',userName.toString());
    localStorage.setItem('email',email.toString());
    localStorage.setItem('password',password.toString());


  }
}
