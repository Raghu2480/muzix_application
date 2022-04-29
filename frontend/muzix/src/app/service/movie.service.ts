
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient,private router:Router) { }
  movieInfo: any;
  selectedMovie(data: any) {
    this.movieInfo = data;
    this.router.navigate(['/', 'movie-info']);
  }


  // private apikey:String="";
  // private urlMovieDb:String="https://api.themoviedb.org/3/movie/550?api_key=906a6c7099bc82b8424ff2afe6fa712b";

  getAllMovies() {
    let url = "https://api.themoviedb.org/3/discover/movie?api_key=906a6c7099bc82b8424ff2afe6fa712b"
    return this.http.get<any>(url);
  }
}
