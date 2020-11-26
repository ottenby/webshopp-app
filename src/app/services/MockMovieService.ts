import IMovieService from './IMovieService';
import { Subject } from 'rxjs';
import Movie from '../models/movie';

export default class MockMovieService implements IMovieService {
    movies: Subject<Movie[]> = new Subject<Movie[]>();

    
    private testMovies: Movie[] = [
        {title: 'Spindelmannen', 
        imgUrl: 'url', 
        description: 'a film about poop', 
        added: new Date, 
        id: 1, 
        price: 199,
        year: 1999},
        {title: 'Robin Hood', 
        imgUrl: 'url', 
        description: 'Robin n stuff', 
        added: new Date, 
        id: 2, 
        price: 299,
        year: 2001}
    ];
    getMovies(): void {
        this.movies.next(this.testMovies);
    }


}