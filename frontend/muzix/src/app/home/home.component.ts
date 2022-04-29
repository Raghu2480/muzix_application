import { Component, OnInit } from '@angular/core';
import { MovieInfoComponent } from '../movie-info/movie-info.component';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any = []
  allMovies: any = []
  constructor(private movieService: MovieService) {
    this.getMovies();
  }

  ngOnInit(): void {
  }
  getMovies() {
    this.movieService.getAllMovies().subscribe(res => {
      this.movies = res;
      // console.log(this.movies.results);
      this.allMovies = this.movies.results;
      console.log(this.allMovies);
    })
  }
  movieDetails(data: any) {
    console.log(data);
    this.movieService.selectedMovie(data);
  }

}
