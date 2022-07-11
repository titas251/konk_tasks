import 'dotenv/config';
import { cleanEnv, num } from 'envalid';

const validator = () =>
  cleanEnv(process.env, {
    MIN_MOVIE_COUNT: num(),
    MAX_MOVIE_COUNT: num(),
  });

validator();
