import Movie from '../models/movie';
import { Subject } from 'rxjs';


export default interface IMovieService {
    movies: Subject<Movie[]>;

    getMovies(): void;
}