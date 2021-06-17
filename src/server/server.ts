import express from "express";
import bodyParser from 'body-parser';

import { config } from '../config/config';
import router from "./routers/router";


export default class Server {
  public app: express.Application;
  public port: string | number;

  constructor() {
    this.port = config.PORT
    this.app = express();

    this.config();

  }

  static init() {
    return new Server();
  }

  start(callback: Function) {
    this.app.listen(this.port, callback());
  }

  config() {

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.use(router);

  }
}
