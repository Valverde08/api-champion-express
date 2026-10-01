import { OK } from "../utils/httpHelper";
import {
  getPlayerIdService,
  getPlayersDataService,
} from "./../services/players/getplayers-data";
import { Request, Response } from "express";

export const getPlayer = async (req: Request, res: Response) => {
  const dataPlayers = await getPlayersDataService();

  res.status(dataPlayers.statusCode).json(dataPlayers.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const player = await getPlayerIdService(id);

  res.status(player.statusCode).json(player.body);
};

export const postPlayer = async (req:Request, res:Response)=>{
  const bodyParams = req.body
}
