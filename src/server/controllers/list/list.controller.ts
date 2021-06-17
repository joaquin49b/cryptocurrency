import { NextFunction, Response, Request } from "express";
import { response } from "../default/default.controller";
import CoinGeckoService from '../../services/coingecko.service';

export class ListController {

  private coinGeckoService: CoinGeckoService;

  constructor() {
    this.coinGeckoService = new CoinGeckoService();
  }

  list = (req: Request, res: Response, next: NextFunction): void => {

    this.coinGeckoService.get().then(result => response(res, { result }));

  };

}
