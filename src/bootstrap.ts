import http from 'http';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

export default class AppServer {
  private app;
  constructor(public port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.loadRoutes();
  }

  public listen(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`Up and running on port ${this.port}`);
    });
  }

  private loadRoutes = () => {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
      console.log('Get /');
    });
  };

  private initializeMiddlewares = () => {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
}
