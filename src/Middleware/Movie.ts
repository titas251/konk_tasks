import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';
import { Country, Genre } from '../Types/Movies';
import { error } from 'console';

export const movieSchema = yup.object({
  director: yup.string(),
  genres: yup.array(yup.mixed().oneOf(Object.values(Genre))).ensure(),
  title: yup.string(),
  country: yup.mixed().oneOf(Object.values(Country)),
  duration: yup.number().min(30).max(200),
  rating: yup.number().min(1).max(10),
});

export const movieValidator = () => async (req: Request, res: Response, next: NextFunction) => {
  const resource = req.body;
  try {
    await movieSchema.validate(resource);
    return next();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      res.status(422).send(error.message);
    }
  }
};
