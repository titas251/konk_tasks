import { faker } from '@faker-js/faker';
import IAuthor from '../Types/IAuthor';
import IBiography from '../Types/IBiography';

export default class Biography implements IBiography {
  public authors: IAuthor[] = [];

  constructor(author: IAuthor, public description: string = undefined!) {
    this.description = description ?? this.RandomDescription;
    this.addAuthor(author);
  }
  private get RandomDescription(): string {
    return faker.lorem.paragraph();
  }

  public addAuthor(author: IAuthor) {
    this.authors.push(author);
  }
}
