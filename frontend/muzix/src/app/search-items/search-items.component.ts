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
  isReady = false
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
    this.movser.searchMovie(this.searchItem).subscribe(resp=>{
      this.searchedMovies=resp;
      this.allSearchedMovies=this.searchedMovies.results;
      console.log(this.allSearchedMovies);
      this.isReady=true;
    })
    
  }
}
