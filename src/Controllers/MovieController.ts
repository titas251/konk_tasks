import { Router, Response, Request } from 'express';
import IController from './IController';
import MovieRepository from '../Repositories/MovieRepository';

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
    const { director, genres, title, country, duration, rating } = req.body;
    this.movieRepository.createMovie(director, genres, title, country, duration, rating);
    return res.status(200).send('Successfully created.');
  }

  public async deleteMovie({ params: { title } }: Request, res: Response) {
    return res.status(200).send(`Movie '${title}' deleted successfully`);
  }

  public setRoutes(): Router {
    this.router.get(`/`, this.getMovies.bind(this));
    this.router.get(`/:title`, this.getMovie.bind(this));
    this.router.post(`/`, this.createMovie.bind(this));
    this.router.delete(`/:title`, this.deleteMovie.bind(this));
    return this.router;
  }
}
