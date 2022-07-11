import 'dotenv/config';
import { cleanEnv, str } from 'envalid';

const validator = () =>
  cleanEnv(process.env, {
    MIN_MOVIE_COUNT: str(),
    MAX_MOVIE_COUNT: str(),
    PORT: str(),
  });

validator();
