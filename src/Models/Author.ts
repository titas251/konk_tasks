import { faker } from '@faker-js/faker';
import IAuthor from '../Types/IAuthor';
import IBiography from '../Types/IBiography';
import Biography from './Biography';

export default class Author implements IAuthor {
  constructor(
    public name: string = undefined!,
    public age: number = undefined!,
    public biography: IBiography = undefined!,
  ) {
    this.name = name ?? this.RandomName;
    this.age = age ?? this.RandomAge;
    this.biography = biography ?? this.RandomBiography;
  }
  private get RandomName(): IAuthor['name'] {
    return faker.name.findName();
  }

  private get RandomAge(): IAuthor['age'] {
    return faker.datatype.number({ min: 18, max: 90 });
  }

  private get RandomBiography(): IAuthor['biography'] {
    return new Biography(this);
  }
}
