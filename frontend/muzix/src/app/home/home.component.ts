import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populares: any[] = [];
  last: any[] = [];
  child: any[] = [];
  private apiKey: string = "e4500ded31029b9e96905a77971a355b";
  private urlMovieDB: string = "https://api.themoviedb.org/3";
  video$:any=[];

  constructor(private videoService: VideoService,private movieServiceApi: MovieApiService) {
    this.videoService.video$.pipe(map(this.addRelativeTime)).subscribe((data:any)=>{
      this.video$ = data;
      this.getMovies();
    });
  }

  // constructor() {
    
  //  }

  ngOnInit(): void {
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
