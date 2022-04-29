import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  // other
  // private apiKey:string="e4500ded31029b9e96905a77971a355b";
  // myApi
  private apiKey:string="906a6c7099bc82b8424ff2afe6fa712b";

  
  private urlMovieDB:string="https://api.themoviedb.org/3"

  getMovie(id:string){
      }
}
