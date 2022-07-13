import { Router, Response, Request } from 'express';
import IController from '../Types/IController';
import MovieRepository from '../Repositories/MovieRepository';
import { movieValidator } from '../Middleware/Movie';

export default class MovieController implements IController {
  public path: IController['path'] = '/movie';
  public router: IController['router'] = Router();
  private movieRepository = new MovieRepository();

  public async getMovies(req: Request, res: Response) {
    const movies = this.movieRepository.getMovies();
    return res.status(200).json(movies);
  }

  public async getMovie({ params: { title } }: Request, res: Response) {
    const movie = this.movieRepository.getMovie(title);
    return res.status(200).json(movie);
  }

  public async createMovie(req: Request, res: Response) {
    const createdMovie = this.movieRepository.createMovie(req.body);
    return res.status(200).send(createdMovie);
  }

  public async deleteMovie({ params: { title } }: Request, res: Response) {
    const deletedMovie = this.movieRepository.deleteMovie(title);
    return res.status(200).send(deletedMovie);
  }

  public setRoutes(): Router {
    this.router.get(`/`, this.getMovies.bind(this));
    this.router.get(`/:title`, this.getMovie.bind(this));
    this.router.post(`/`, movieValidator(), this.createMovie.bind(this));
    this.router.delete(`/:title`, this.deleteMovie.bind(this));
    return this.router;
  }
}
