import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedMovie: Movie;
  movies: Movie[] = [];
  show: boolean = false;
  
  constructor(
    private movieService: MovieService, 
    private cartService: CartService,
    ) { }

  addToCart(clickedMovie) {
    this.cartService.addToCart(clickedMovie);
    console.log(clickedMovie);
  }
  showDetails(movie: Movie) {
    this.movieService.showDetail(movie);
  }
  getMovie(clickedMovie) {
    this.show = !this.show;
    console.log(clickedMovie);
    this.movieService.getMovie(clickedMovie);
     this.selectedMovie = this.movies.find(movie => 
      movie.id === clickedMovie.id
    )  
  }


  ngOnInit(): void {
    this.movieService.movies.subscribe((m: Movie[]) => {
      this.movies = m;
    });
    this.movieService.getMovies();
  }

}
