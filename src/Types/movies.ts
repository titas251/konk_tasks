export enum Genre {
  'drama',
  'action',
  'fantasy',
}

export interface IMovie {
  director: string;
  genre: Genre;
  title: string;
  duration: number;
  rating: number;
}

export class Movie implements IMovie {
  constructor(
    public director: string,
    public genre: Genre,
    public title: string,
    public duration: number,
    public rating: number,
  ) {
    this.director = director;
    this.genre = genre;
    this.title = title;
    this.duration = duration;
    this.rating = rating;
  }
}
