import 'dotenv/config';
import AppServer from './bootstrap';

const server = new AppServer(parseInt(process.env.PORT!));
server.listen();

/*
import 'dotenv/config';
import { getRandomInt } from './Utils/helpers';
import { Movie } from './Classes/movie';*/

/*const movie_count_min = parseInt(process.env.MIN_MOVIE_COUNT!);
const movie_count_max = parseInt(process.env.MAX_MOVIE_COUNT!);

const movieArray = [...Array(getRandomInt(movie_count_min, movie_count_max))].map(() => new Movie());
console.log(movieArray);*/
