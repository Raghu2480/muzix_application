import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string = "";
  constructor(private router:Router) { }
  isLoggedIn: boolean = false;
  login() {
    this.isLoggedIn = true;
    return this.isLoggedIn;
  }
  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
    return this.isLoggedIn;

  }
}
