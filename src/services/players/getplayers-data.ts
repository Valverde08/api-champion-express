import { findAllPlayers } from "../../Repositories/Players/get-players-repository"
import { HttpResponse, noContent, OK } from "../../utils/httpHelper"

export const getPlayersDataService = async ()=>{
    const data = await findAllPlayers()
    let response:HttpResponse
    
    if(data){
        response = await OK(data)
    } else{
        response = await noContent()
    }
    
    return response
}