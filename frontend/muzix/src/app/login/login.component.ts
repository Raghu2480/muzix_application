import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MainService } from '../service/main.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  // LoginForm=new FormGroup({
  //   emailId:new FormControl('',[Validators.required,Validators.email]),
  //   password:new FormControl()
  // });
  
  // get getEmailId() { return this.LoginForm.controls['emailId']; }

  // loggedin() {
  //   this.email=this.getEmailId;
  //   console.table(this.LoginForm.value);
  //   this.login.getData(this.LoginForm.value);
  // }

  authenticationToken:any="";
    signin:any;
    LoginForm=new FormGroup({
      email:new FormControl('',[Validators.email, Validators.required]),
      password:new FormControl('',[Validators.required])
    })
    get getEmail(){
      return this.LoginForm.controls['email']
    }
    
  constructor(private registerS:MainService,private authService:AuthService,public router:Router,private movieService:MovieService) {}
  
  onSubmit(){
    console.log(this.LoginForm.value);
    
  }
  loggedin(): void {
    this.registerS.email=this.LoginForm.value.email;
    this.movieService.email=this.LoginForm.value.email;
    const b=this.registerS.login(this.LoginForm.value).subscribe((a)=>{
      console.log(a); 
      this.authenticationToken=a;
      this.signin=this.authService.login();
      this.router.navigate(["dashboard"])
    },
    err=>{
      alert("Invalid username or password");
      this.LoginForm.reset();
    })
    this.LoginForm.reset({})
  }
 
}
