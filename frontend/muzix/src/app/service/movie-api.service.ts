import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  // other
  // private apiKey:string="e4500ded31029b9e96905a77971a355b";
  // myApi
  // private apiKey: string = "906a6c7099bc82b8424ff2afe6fa712b";
url:any;
constructor(private http:HttpClient){}
  // private urlMovieDB: string = "https://api.themoviedb.org/3"

  getAllMovies() {
    this.url="https://api.themoviedb.org/3/movie/550?api_key=906a6c7099bc82b8424ff2afe6fa712b";
    return this.http.get<any>(this.url);
  }
}
