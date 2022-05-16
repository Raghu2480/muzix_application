import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import {  Router } from '@angular/router';
>>>>>>> 763949c9ed90fa5ce1b4a2d4bb5ae29813491e90
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  allFavouriteMovies: any = [];
  favourites: any = [];
  constructor(private movieService: MovieService,private router:Router) {  }

  ngOnInit(): void {
    this.getFavouriteMovies();
    console.log(this.favourites);

  }
  getFavouriteMovies() {
    this.movieService.getFavouriteMoviesByEmail().subscribe(res => {
      this.allFavouriteMovies = res;
      this.allFavouriteMovies.forEach((s: any) => {
        this.movieService.getAllFavouriteMoviesFromApi(+s.movieId).subscribe((response) => {
          // console.log("hi");
          // console.log(response);
          this.favourites.push(response);
        });
      })
    });
  }
  movieDetails(data: any) {
    this.movieService.selectedMovie(data);
  }
  deleteMovie(data:any) {
    // console.log(data.id);
    this.movieService.deleteFavouriteMovie(data.id).subscribe(res=>{
<<<<<<< HEAD
      console.log("deleting in favourite service ");
      console.log(res); 
    },err=>{
      // alert("movie deleted successfully");
      
    })
    this.movieService.deleteFavouriteFromMovieService(data.id).subscribe(res=>{
      console.log("deleting in movie service ");
      
      console.log(res);
    })
    this.router.navigate(["dashboard/home"]);
    
=======
      console.log(res);
      this.ngOnInit();
      console.log("delete movies subscribed");

    },err=>{
    })
    this.router.navigate(["dashboard/home"]);
    alert("Deleted");
    // this.router.navigate(["dashboard/favourite"]);
>>>>>>> 763949c9ed90fa5ce1b4a2d4bb5ae29813491e90
  }
  
}
