import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
@Input() movie: Movie;

detailsExist: boolean = true;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
   }

}
