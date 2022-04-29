import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  selectedMovieData: any;
  constructor(private mviS: MovieService) {
    // this.mov();
  }

  ngOnInit(): void {
    console.log("-------------------");
    this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
  }
  // mov() {
    
  // }

}
