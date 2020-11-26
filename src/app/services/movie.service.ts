import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from '../models/movie';
import { Subject } from 'rxjs';
import IMovieService from './IMovieService';

@Injectable({
  providedIn: 'root'
})
export class MovieService implements IMovieService {
  
  movies = new Subject<Movie[]>();

  constructor(private http: HttpClient) { }

  showDetail(movie: Movie) {
    return movie;
  }

  getMovie(movie: Movie) {
    return  movie;
  }
  
  getMovies() {
    this.http.get('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((data: any) => {
      console.log(data);
      const moviesFromApi: Movie[] = data.map(m => {
        const movie = new Movie();
        movie.title = m.name;
        movie.added = m.added;
        movie.description = m.description;
        movie.price = m.price;
        movie.year = m.year;
        movie.id = m.id;
        if(m === undefined) {
          movie.imgUrl = 'https://www.google.com/url?sa=i&source=imgres&cd=&cad=rja&uact=8&ved=2ahUKEwjNiLPf8P7pAhVPyKYKHZ6CBnUQjRx6BAgBEAQ&url=https%3A%2F%2Fse.expensereduction.com%2Fclients-home%2Fattachment%2Fquestion-mark-icon%2F&psig=AOvVaw1Z8Aj2CGtRlu8qmUHxmExn&ust=1592140782001788'
        }else {
          movie.imgUrl = m.imageUrl;
        }
        return movie;
      });
      this.movies.next(moviesFromApi);
    });
    console.log(this.movies);
  }
}
