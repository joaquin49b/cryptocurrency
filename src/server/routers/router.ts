import express from "express";
import bodyParser from 'body-parser';
import ListRouter from './list/list.router';



const router = express();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.use(ListRouter);
// router.use(userRouter);


export default router;
