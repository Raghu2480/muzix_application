import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit {
  // buscar: string;
  peliculas: any[] = [];
  isReady = false
  constructor( private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param['texto']) {
        // this.buscar = param.texto;
        this.buscarMovie();
      }
    })
  }

  ngOnInit() {
  }
  buscarMovie() {
    // this.mvS.buscarMovie(this.buscar).subscribe(resp => {
    //   this.peliculas = resp.results;
    //   this.isReady = true;
    // })
  }
}
