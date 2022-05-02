import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private MyAPIKey: string = "906a6c7099bc82b8424ff2afe6fa712b"; 
  // private urlMovieDB: string = "https://api.themoviedb.org/3"
  constructor(private http: HttpClient,private router:Router) {}
  movieInfo: any;
  currentPage:number=1

  // for particular movie
  selectedMovie(data: any) {
    this.movieInfo = data;
    this.router.navigate(['/', 'movie-info']);
  }
  // To display all Movies
  getAllMovies(currentPage:number) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.MyAPIKey}&page=${currentPage}`;
    return this.http.get<any>(url);
  }
  // get all genere
  getAllMovieGenre()
  {
    let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.MyAPIKey}&language=en-US`;
    return this.http.get<any>(url);
  }

  // Search movies
  searchMovie(searchItem:any,currentPage:number){
    console.log("i am inside the movie service");
    console.log(searchItem);
    let searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=${this.MyAPIKey}&language=es&query=${searchItem}&page=${currentPage}`
    console.log(searchUrl);
    return this.http.get(searchUrl);
    // return this.http.getRequest("searchUrl");
  }
}
