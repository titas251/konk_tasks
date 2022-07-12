import 'dotenv/config';
import AppServer from './Bootstrap';
import IController from './Controllers/IController';
import MovieController from './Controllers/MovieController';

const controllers: Array<IController> = [new MovieController()];

const server = new AppServer(parseInt(process.env.PORT!), controllers);
server.listen();
