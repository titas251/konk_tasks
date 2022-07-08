import { getRandomInt } from './Utils/helpers';
import { getRandomMovieObject } from './Utils/movieHelpers';

const movieArray = [...Array(getRandomInt(5, 10))].map(getRandomMovieObject);
console.log(movieArray);
