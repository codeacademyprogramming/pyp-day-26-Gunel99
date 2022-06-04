import express, { Request, Response } from "express";
import { Rooms } from "./data";

export const RoomRouter = express.Router();

RoomRouter.get('/', (req: Request, res: Response) => {
    res.json(Rooms);
    res.status(200);
});