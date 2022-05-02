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
  genres:any=[];
  particularMovieGenre:any;
  constructor(private mviS: MovieService) { }

  ngOnInit(): void {
    console.log("-------------------");
    this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
    this.getMovieData();

    // this.selectedMovieGenres=this.selectedMovieData.genre_ids;
    // console.log(this.selectedMovieGenres);
    // console.log(this.genres.length);
    // this.hiGenres();
  }
  
  getMovieData()
  {
    this.mviS.getParticularMovieDetails(this.selectedMovieData.id).subscribe(res=>{
      this.genres=res;
      console.log("this is genres");
      console.log(this.genres);
      this.particularMovieGenre=this.genres.genres;
      
      // console.log(this.genres.length());
      
    });
  }
  // hiGenres()
  // {
  //   console.log("hi");
  // }

}
