import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private login:MainService) { }
  email:any;

  ngOnInit(): void {
  }
  LoginForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl()
  });
  
  get getEmailId() { return this.LoginForm.controls['emailId']; }

  loggedin() {
    this.email=this.getEmailId;
    console.table(this.LoginForm.value);
    this.login.getData(this.LoginForm.value);
  }
}
