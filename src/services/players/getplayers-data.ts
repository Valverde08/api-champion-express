import { HttpResponse } from "../../models/http/http-responde-model";
import {
  findAllPlayers,
  findPlayerByid,
} from "../../Repositories/Players/get-players-repository";
import { noContent, OK } from "../../utils/httpHelper";

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
