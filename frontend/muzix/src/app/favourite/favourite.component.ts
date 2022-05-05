import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  allFavouriteMovies:any=[];
  favourites:any=[];
  
  constructor(private movieService:MovieService) {
    
   }

  ngOnInit(): void {
    this.getFavouriteMovies();
    console.log(this.favourites); 
  }
  getFavouriteMovies(){
    this.movieService.getFavouriteMoviesByEmail().subscribe(res=>{
      this.allFavouriteMovies=res;
      this.allFavouriteMovies.forEach((s:any)=>{
        this.movieService.getAllFavouriteMoviesFromApi(+s.movieId).subscribe(response=>{
          // console.log("hi");
          // console.log(response);
          this.favourites.push(response) ;
        });
      })
    });
  }
}
