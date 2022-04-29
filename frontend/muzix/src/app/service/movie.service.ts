
import {  HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // private apikey:String="";
  // private urlMovieDb:String="https://api.themoviedb.org/3/movie/550?api_key=906a6c7099bc82b8424ff2afe6fa712b";

  constructor(private http:HttpClient) { }
  getAllMovies(){
   let url="https://api.themoviedb.org/3/discover/movie?api_key=906a6c7099bc82b8424ff2afe6fa712b"
    return this.http.get<any>(url);
  }
}
