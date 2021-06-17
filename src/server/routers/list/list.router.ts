import { Router } from "express";

import { ListController } from '../../controllers/list/list.controller';

const ListRouter = Router();

const listController = new ListController();

ListRouter.get("/list", listController.list);

export default ListRouter;

