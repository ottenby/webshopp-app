import { Injectable, Output, EventEmitter, Input } from '@angular/core';
import Movie from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {
  @Input() movie: Movie;
  @Output() showDetails = new EventEmitter<Movie>();

  

  constructor() { }
}
