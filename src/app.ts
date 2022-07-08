import { getRandomInt } from './Utils/helpers';
import { Movie } from './Classes/movie';

const movieArray = [...Array(getRandomInt(5, 10))].map(() => new Movie());
console.log(movieArray);
