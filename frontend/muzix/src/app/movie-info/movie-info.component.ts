import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  selectedMovieData: any;
  // selectedMovieGenres:any;
  movies:any=[];

  particularMovieGenre:any;
  constructor(private mviS: MovieService) { }

  ngOnInit(): void {
    console.log("-------------------");
    this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
    this.getMovieData();
  }
  
  getMovieData()
  {
    this.mviS.getParticularMovieDetails(this.selectedMovieData.id).subscribe(res=>{
      this.movies=res;
      console.log("this is genres");
      console.log(this.movies);
      this.mviS.recommendedMovieId=this.movies.id;
      this.particularMovieGenre=this.movies.genres;  
    });
  }
}
