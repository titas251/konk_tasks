import IAuthor from '../Types/IAuthor';

export default interface IBiography {
  description: string;
  authors: IAuthor[];
  addAuthor(author: IAuthor): void;
}
