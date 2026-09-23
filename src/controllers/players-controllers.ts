import { Request, Response } from "express"
import { getPlayersDataService } from "../services/players/getplayers-data"

export const getPlayer = async (req:Request, res:Response)=>{
    const dataPlayers =await getPlayersDataService()
    res.status(200).json( dataPlayers)

       
}