import { HttpResponse } from "../../models/http/http-responde-model";
import { playerModel } from "../../models/players/player-model";
import {
  findAllPlayers,
  findPlayerByid,
} from "../../Repositories/Players/get-players-repository";
import { badRequest, noContent, OK } from "../../utils/httpHelper";

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
    console.log("Good");
    response = await OK(player);
  } else {
    console.log("Bad");
    response = await badRequest();
  }
  return response;
};
