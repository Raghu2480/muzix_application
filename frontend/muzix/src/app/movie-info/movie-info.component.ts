import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  selectedMovieData: any;
  genres:any;
  constructor(private mviS: MovieService) {
    this.getGenre();
   }

  ngOnInit(): void {
    console.log("-------------------");
    this.selectedMovieData = this.mviS.movieInfo;
    console.log(this.selectedMovieData);
  }

  getGenre()
  {
    this.mviS.getAllMovieGenre().subscribe(res=>{
      this.genres=res;
      console.log(this.genres);
      if(this.selectedMovieData.genere_ids==this.genres){
        this.genres=this.selectedMovieData.genere_ids.name;
      }
    });
  }
  

}
