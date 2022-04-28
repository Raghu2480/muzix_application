import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient:HttpClient,private router: Router) { }
  redirectUrl: string = "";
  isLoggedIn: boolean = false;
  logdata: any;
  customerId:any;
  i: any;

  // register service

  registerBackend(RegistrationForm: any) {
    console.log(" services works..");
    console.log(RegistrationForm);
    // const registerObservable = this.httpClient.post<any>('http://localhost:8080/register', RegistrationForm);
    const registerObservable = this.httpClient.post<any>('http://localhost:3000/registers', RegistrationForm);

    alert("backend Registered Successfully!!!");
    this.router.navigate(['/', 'login']);
    return registerObservable;
  }

  // login service

  getData(LoginForm: any) {
    // this.httpClient.get<any>("http://localhost:8080/api/v1/user-service/users")
    this.httpClient.get<any>("http://localhost:3000/registers")
      .subscribe((loggedData: any) => {
        console.log("login logg data");
        console.log(loggedData);
        console.log("------++++++-----");
        this.logdata = loggedData;
        for (this.i = 0; this.i < this.logdata.length; this.i++) {
          if (LoginForm.emailId === this.logdata[this.i].emailId && LoginForm.password === this.logdata[this.i].password) {
            this.isLoggedIn=true;
           this.customerId= this.logdata[this.i].userId;
           console.log("id of user");
           console.log(this.customerId);
            alert("loggedin!!");
            this.router.navigate(['/', 'dashboard']);
            return;
          }
        }
        alert("login failed");      
      });
  }
}