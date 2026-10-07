import { HttpResponse } from "../../models/http/http-responde-model";
import { playerModel } from "../../models/players/player-model";
import {
  deleteOnePlayer,
  findAllPlayers,
  findPlayerByid,
  insertPlayer,
} from "../../Repositories/Players/get-players-repository";
import { badRequest, created, noContent, OK } from "../../utils/httpHelper";

export const getPlayersDataService = async () => {
  const data = await findAllPlayers();
  let response: HttpResponse;

  if (data) {
    response = await OK(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const getPlayerIdService = async (id: number) => {
  const data = await findPlayerByid(id);
  let response: HttpResponse;

  if (data) {
    response = await OK(data);
  } else {
    response = await noContent();
  }

  return response;
};

export const createPlayerService = async (player: playerModel) => {
  let response: HttpResponse;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await created(player);
  } else {
    response = await badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await deleteOnePlayer(id);

  response = OK({ message: "deleted" });
  return response;
};
