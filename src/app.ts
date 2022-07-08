import { faker } from '@faker-js/faker';

enum Genre {
  'drama',
  'action',
  'fantasy',
}

enum Country {
  'US',
  'UK',
  'France',
}

interface IMovie {
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
}

const movieTitanic = {
  director: 'Mark Z',
  genres: [Genre.drama, Genre.fantasy],
  title: 'Titanic',
  country: Country.US,
  duration: 126,
  rating: 7.63,
};

const movieDjango = {
  director: 'Mark T',
  genres: [Genre.action],
  title: 'Django',
  country: Country.US,
  duration: 102,
};

const isMovie = (obj: any): obj is IMovie => {
  return (
    typeof obj.director === 'string' &&
    obj.genres.every((value: any) => typeof value === 'number') === true &&
    typeof obj.title === 'string' &&
    typeof obj.country === 'number' &&
    typeof obj.duration === 'number' &&
    typeof obj.rating === 'number'
  );
};

console.log(isMovie(movieTitanic)); //true
console.log(isMovie(movieDjango)); //false

// #6
const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const genres: Genre[] = [Genre.action, Genre.drama, Genre.fantasy];
const countries: Country[] = [Country.US, Country.France, Country.UK];

const getRandomMovieObject = (): IMovie => {
  return {
    director: faker.name.findName(),
    genres: faker.helpers.arrayElements(genres),
    title: `${faker.word.adjective()} ${faker.word.noun()}`,
    country: faker.helpers.arrayElement(countries),
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
