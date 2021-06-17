import express from "express";
import ListRouter from './list/list.router';

const router = express();

router.use(ListRouter);


export default router;
