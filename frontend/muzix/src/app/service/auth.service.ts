import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string = "";
  constructor() { }
  isLoggedIn:boolean=false;
  login(){
    this.isLoggedIn=true;
    return this.isLoggedIn;
  }
  logout(){
    this.isLoggedIn=false;
    return this.isLoggedIn;
  }
}
