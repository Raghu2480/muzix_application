import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private apiKey: string = "906a6c7099bc82b8424ff2afe6fa712b";
  // url: any;
  // constructor(private http: HttpClient) { }
  // private urlMovieDB: string = "https://api.themoviedb.org/3"
  constructor(private http: HttpClient,private router:Router) { }
  movieInfo: any;
  currentPage:number=1
  selectedMovie(data: any) {
    this.movieInfo = data;
    this.router.navigate(['/', 'movie-info']);
  }


  // private apikey:String="";
  // private urlMovieDb:String="https://api.themoviedb.org/3/movie/550?api_key=906a6c7099bc82b8424ff2afe6fa712b";

  getAllMovies(currentPage:number) {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=906a6c7099bc82b8424ff2afe6fa712b&page=${currentPage}`
    return this.http.get<any>(url);
  }

  // / get all search movies
  // buscarMovie(pelicula: string) {
  //   let searchUrl = `${this.urlMovieDB}/search/movie?api_key=${this.apiKey}&language=es&query=
  //   ${pelicula}&page=1&callback=JSONP_CALLBACK`
  //   return this.http.get<any>(searchUrl);
  //   // return this.http.get<any>(searchUrl).pipe(map(res => res.json()))
  // }
  searchMovie(searchItem:any,currentPage:number){
    console.log("i am inside the movie service");
    console.log(searchItem);
    let searchUrl=`https://api.themoviedb.org/3/search/movie?api_key=906a6c7099bc82b8424ff2afe6fa712b&language=es&query=${searchItem}&page=${currentPage}`
    console.log(searchUrl);
    return this.http.get(searchUrl);
    // return this.http.getRequest("searchUrl");
  }
  storeSearchedMovieToJson(movies:any){
    console.log("i am going to store this data in json");
    console.log(movies);
    return this.http.post<any>("http://localhost:3000",movies);
  }
}
