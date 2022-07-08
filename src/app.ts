import { faker } from '@faker-js/faker';

enum Genre {
  'drama',
  'action',
  'fantasy',
}

interface IMovie {
  director: string;
  genre: Genre;
  title: string;
  duration: number;
  rating: number;
}

const movieTitanic = {
  director: 'Mark Z',
  genre: Genre.drama,
  title: 'Titanic',
  duration: 126,
  rating: 7.63,
};

const movieDjango = {
  director: 'Mark T',
  genre: Genre.action,
  title: 'Django',
  duration: 102,
};

const isMovie = (obj: any): obj is IMovie => {
  return (
    typeof obj.director === 'string' &&
    typeof obj.genre === 'number' &&
    typeof obj.title === 'string' &&
    typeof obj.duration === 'number' &&
    typeof obj.rating === 'number'
  );
};

//console.log(isMovie(movieTitanic));  //true
//console.log(isMovie(movieDjango));  //false

// #6
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomMovieObject = (): IMovie => {
  return {
    director: faker.name.findName(),
    genre: getRandomInt(0, Object.keys(Genre).length / 2),
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
    duration: getRandomInt(30, 200),
    rating: faker.datatype.float({ min: 1, max: 10 }),
  };
};

const createMovieArray = (array: IMovie[], minLength: number, maxLength: number): IMovie[] => {
  for (let i = 0; i < getRandomInt(minLength, maxLength); i++) {
    array.push(getRandomMovieObject());
  }

  return array;
};

const movieArray: IMovie[] = createMovieArray([], 5, 10);
console.log(movieArray);

/*
const movieArray = [...Array(getRandomInt(5, 10))].map(
  getRandomMovieObject
);
console.log(movieArray);
*/
