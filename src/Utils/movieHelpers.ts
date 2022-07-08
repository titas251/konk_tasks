import { faker } from '@faker-js/faker';
import { IMovie, Movie, Genre } from '../Types/movies';
import { getRandomInt } from './helpers';

export const getRandomMovieObject = (): IMovie => {
  return new Movie(
    faker.name.findName(),
    getRandomInt(0, Object.keys(Genre).length / 2),
    `${faker.word.adjective()} ${faker.word.noun()}`,
    getRandomInt(30, 200),
    faker.datatype.float({ min: 1, max: 10 }),
  );
};

export const isMovie = (obj: any): obj is IMovie => {
  return (
    typeof obj.director === 'string' &&
    typeof obj.genre === 'number' &&
    typeof obj.title === 'string' &&
    typeof obj.duration === 'number' &&
    typeof obj.rating === 'number'
  );
};
