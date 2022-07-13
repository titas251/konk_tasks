import 'dotenv/config';
import AppServer from './Bootstrap';
import IController from './Types/IController';
import MovieController from './Controllers/MovieController';

const controllers: Array<IController> = [new MovieController()];

const server = new AppServer(parseInt(process.env.PORT || '3000'), controllers);
server.listen();
