import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any=[]
  allMovies:any=[]

  constructor(private movieService: MovieService) { 
    this.getMovies();
  }

  ngOnInit(): void {
  }
  getMovies(){
    this.movieService.getAllMovies().subscribe(res=>{
      this.movies=res;
      // console.log(this.movies.results);
      this.allMovies=this.movies.results;
      console.log(this.allMovies);
    })
  }

  // getMovie(id:string){
  //   https://api.themoviedb.org/3/movie/419704?api_key=e4500ded31029b9e96905a77971a355b&language=es
  //   let url=`${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`
  //   console.log(url)

  //   return this.jsonp.get(url).pipe(map(res=>res.json()))
  //   }
  getMovies() {
    this.movieServiceApi.getAllMovies().subscribe(
      res=>{
        console.log(res);
      }
    );



  addRelativeTime(videos: any) {
    return videos.map((video: any) => {
      // video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      // video.contentDetails.length = moment.duration(video.contentDetails.duration,"minutes").format();
      console.log('addrelativetime');
      
      return video;
    });
  }
  }

}
