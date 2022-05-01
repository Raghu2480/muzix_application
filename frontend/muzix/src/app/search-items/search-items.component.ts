import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  
  searchItem: any;
  searchedMovies: any=[];
  allSearchedMovies: any=[];
  isReady = false;
  currentPg:number=1;
  constructor( private route: ActivatedRoute,private movser:MovieService) {
    this.route.params.subscribe(param => {
      if (param['text']) {
        this.searchItem = param['text'];
        this.buscarMovie();
      }
    })
  }

  ngOnInit() {
  }
  buscarMovie() {
    this.movser.searchMovie(this.searchItem,this.currentPg).subscribe(resp=>{
      this.searchedMovies=resp;
      this.allSearchedMovies=this.searchedMovies.results;
      // this.movser.storeSearchedMovieToJson(this.allSearchedMovies);
      console.log(this.allSearchedMovies);
      this.isReady=true;
    })
    
  }
  decreasePage(){
    this.currentPg--;
    this.buscarMovie();
  }
  increasePage(){
    this.currentPg++;
    this.buscarMovie();
  }
}
