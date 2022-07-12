import { IMovie } from '../Types/Movies';
import { Movie, MoviesStorage } from '../Models/Movie';

export default class MovieRepository {
  private moviesStorage = MoviesStorage;

  public getMovie(title: string) {
    return this.moviesStorage.find((movie) => movie.title === title);
  }

  public getMovies() {
    return this.moviesStorage;
  }

  public createMovie(
    director: IMovie['director'],
    genres: IMovie['genres'],
    title: IMovie['title'],
    country: IMovie['country'],
    duration: IMovie['duration'],
    rating: IMovie['rating'],
  ) {
    this.moviesStorage.push(new Movie(director, genres, title, country, duration, rating));
  }

  public deleteMovie(title: string) {
    this.moviesStorage = this.moviesStorage.filter((movie) => movie.title !== title);
  }
}
