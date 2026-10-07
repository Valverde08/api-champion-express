import { HttpResponse } from "../models/http/http-responde-model";
import { badRequest } from "../utils/httpHelper";
import {
  createPlayerService,
  deletePlayerService,
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

export const postPlayer = async (req: Request, res: Response) => {
  const bodyParams = req.body;

  const playerResponse = await createPlayerService(bodyParams);

  if (playerResponse) {
    console.log("ola");

    res.status(playerResponse.statusCode).json(playerResponse.body);
  } else {
    let response = await badRequest();
    res.status(response.statusCode).json(response.body);
  }
};

export const deletePlayer = async (req: Request, res: Response) => {
  const idPlayer = Number(req.params.id);

  const deletedPlayer = await deletePlayerService(idPlayer);

  res.status(deletedPlayer.statusCode).json(deletedPlayer.body);
};
