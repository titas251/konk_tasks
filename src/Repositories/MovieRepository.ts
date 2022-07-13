import { IMovie } from '../Types/Movies';
import { Movie } from '../Models/Movie';
import { getRandomInt } from '../Utils/helpers';

export default class MovieRepository {
  private moviesStorage = [...Array(getRandomInt(5, 10))].map(() => new Movie());

  public getMovie(title: string) {
    return this.moviesStorage.find((movie) => movie.title === title);
  }

  public getMovies() {
    return this.moviesStorage;
  }

  public createMovie(movie: IMovie) {
    const createdMovie = new Movie(
      movie.director,
      movie.genres,
      movie.title,
      movie.country,
      movie.duration,
      movie.rating,
    );
    this.moviesStorage.push(createdMovie);

    return createdMovie;
  }

  public deleteMovie(title: string) {
    const deletedMovie = this.getMovie(title);
    if (deletedMovie !== undefined) {
      this.moviesStorage = this.moviesStorage.filter((movie) => movie.title !== deletedMovie.title);
      return deletedMovie;
    }
    return;
  }
}
