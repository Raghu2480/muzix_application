import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private register:MainService) { }

  ngOnInit(): void {
  }

  RegistrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required),
    mobileNo: new FormControl('')
  });
  get getName() { return this.RegistrationForm.controls['name']; }
  get getEmailId() { return this.RegistrationForm.controls['emailId']; }
  get getPassword() { return this.RegistrationForm.controls['password']; }
  get getConfirmPassword() { return this.RegistrationForm.controls['confirmPassword']; }
  get getMobileNo() { return this.RegistrationForm.controls['mobileNo']; }
  get getFile(){ return this.RegistrationForm.controls['file']; }

  OnRegister() {
    console.table(this.RegistrationForm.value);
    if (this.getPassword.value != this.getConfirmPassword.value) {
      alert("Your password confirm password should match");
    }
    else {
      this.register.registerBackend(this.RegistrationForm.value).subscribe();
      console.log("Registerd successfully");      
    }
  }

  upload(data: any) {
    console.log(data);
    this.RegistrationForm.value.file = data.target.files[0].name;
    console.log(this.RegistrationForm.value);
  }

}
