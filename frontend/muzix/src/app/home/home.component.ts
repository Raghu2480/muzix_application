import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populares:any[]=[];
  last:any[]=[];
  child:any[]=[];
  private apiKey: string = "e4500ded31029b9e96905a77971a355b";
  private urlMovieDB: string = "https://api.themoviedb.org/3"

  constructor() { }

  ngOnInit(): void {
  }

  // getMovie(id:string){
  //   https://api.themoviedb.org/3/movie/419704?api_key=e4500ded31029b9e96905a77971a355b&language=es
  //   let url=`${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`
  //   console.log(url)

  //   return this.jsonp.get(url).pipe(map(res=>res.json()))
  //   }
  
}
