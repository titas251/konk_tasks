export enum Genre {
  'DRAMA',
  'ACTION',
  'FANTASY',
}

export enum Country {
  'US',
  'UK',
  'FRANCE',
}

export interface IMovie {
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
}
