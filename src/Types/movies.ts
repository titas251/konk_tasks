export enum Genre {
  'drama',
  'action',
  'fantasy',
}

export enum Country {
  'US',
  'UK',
  'France',
}

export interface IMovie {
  director: string;
  genres: Genre[];
  title: string;
  country: Country;
  duration: number;
  rating: number;
}
