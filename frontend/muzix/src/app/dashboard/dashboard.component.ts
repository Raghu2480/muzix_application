import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
email:any;
user:any;
userName:any;
userProfileImg:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private mainService:MainService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.email=this.mainService.email;
    console.log(this.email);
    // this.mainService.getUser(this.email).subscribe((res: any)=>{
    //   console.log(res);
    // });
    this.getUserByEmail();
  }
  searchingItems(text: string) {
    if (text.length == 0) {
      return;
    }
    console.log(text);
    this.router.navigate(['search-items', text])
  }
  getUserByEmail(){
    this.mainService.getUser().subscribe(res=>{
      this.user=res;
      this.userName=this.user.userName;
      this.userProfileImg=this.user.profilePicture;
      console.log(this.user);
    });
    // console.log(this.mainService.getUser());
  }
  logout()
  {
    this.router.navigate(["/login"])
  }

}
