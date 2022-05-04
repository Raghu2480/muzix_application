import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { RecommedationComponent } from './recommedation/recommedation.component';
import { RegisterComponent } from './register/register.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  // {
  //   path: "",
  //   component: SidebarComponent,
  //   children: [
  //     {
  //       path: "login",
  //       component: LoginComponent
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
  {
    path: "",
    component: DashboardComponent,
    children:[
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "search-items/:text",
        component: SearchItemsComponent
      },
      {
        path: "recommended",
        component:RecommedationComponent
      },
      {
        path: "movie-info",
        component: MovieInfoComponent
      } 
    ]
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
