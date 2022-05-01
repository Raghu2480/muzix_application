import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private logoutS:MainService) { }

  ngOnInit(): void {
  }

  searchingItems(text: string) {
    if (text.length == 0) {
      return;
    }
    console.log(text);
    this.router.navigate(['search-items', text])
  }
  logout(){
    this.logoutS.logout();
    alert('logged out Sucessfully');
  }

}
