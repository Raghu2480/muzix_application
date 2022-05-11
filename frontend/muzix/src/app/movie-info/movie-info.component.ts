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
  movies: any = [];
  favouriteMovieId: number = 0;
  favouriteMovieName: any;
  particularMovieGenre: any;
  alert: boolean = false;
  constructor(private mviS: MovieService) { }

  ngOnInit(): void {
    console.log("-------------------");
    this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
    this.getMovieData();
  }
  getMovieData() {
    this.mviS.getParticularMovieDetails(this.selectedMovieData.id).subscribe(res => {
      this.movies = res;
      console.log("this is genres");
      console.log(this.movies);
      this.mviS.recommendedMovieId = this.movies.id;
      this.particularMovieGenre = this.movies.genres;
    });
  }
  addToFavourite(selectedMovieData: any) {
    this.favouriteMovieId = selectedMovieData.id;
    this.favouriteMovieName = selectedMovieData.original_title;
    this.mviS.addMovieToFavourites(this.favouriteMovieId, this.favouriteMovieName).subscribe((res) => {
      console.log(res);
    },
      err => {
        alert("this movie already added to your favourite list");
      });
    this.alert = true;
  }
  closeAlert() {
    this.alert = false
  }
}
