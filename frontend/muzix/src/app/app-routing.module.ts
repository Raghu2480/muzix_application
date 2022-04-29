import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: SidebarComponent,
  //   children:[
  //     {
  //       path:"login",
  //       component:LoginComponent
  //     },
  //     {
  //       path: "register",
  //       component: RegisterComponent
  //     },
  //     {
  //       path: "",
  //       redirectTo: "login",
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path:"home",
  //   component:HomeComponent
  // },
  // {
  //   path:"dashboard",
  //   component:DashboardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
