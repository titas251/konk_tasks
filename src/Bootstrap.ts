import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import IController from './Types/IController';

export default class AppServer {
  private app;

  constructor(public port: number, public controllers: Array<IController>) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.loadControllers(controllers);
  }

  public listen(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`Up and running on port ${this.port}`);
    });
  }

  public loadControllers(controllers: Array<IController>): void {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.setRoutes());
    });
  }

  private initializeMiddlewares = () => {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
}
