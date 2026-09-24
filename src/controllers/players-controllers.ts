import { Request, Response } from "express"
import { getPlayersDataService } from "../services/players/getplayers-data"
import {OK} from "../utils/httpHelper"


export const getPlayer = async (req:Request, res:Response)=>{
    

    const dataPlayers =await getPlayersDataService ()

    

    res.status(dataPlayers.statusCode).json(dataPlayers.body)

       
}

