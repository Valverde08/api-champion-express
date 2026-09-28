import { playerModel } from "../../models/players/player-model";

const databse: playerModel[] = [
  {
    id: 1,
    name: "juba",
  },
  {
    id: 2,
    name: "acevedo",
  },
];

export const findAllPlayers = async (): Promise<playerModel[]> => {
  return databse;
};

export const findPlayerByid = async (
  id: number,
): Promise<playerModel | undefined> => {
  const player = databse.find((player) => player.id === id);
  return player;
};
