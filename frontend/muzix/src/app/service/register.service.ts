import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  login(data:any){
    return this.httpClient.post("http://localhost:8085/api/v1/login",data);
  }
}
