import { HttpResponse, noContent, OK } from "../../utils/httpHelper"

export const getPlayersDataService = async ()=>{
    const data = {
            nome: "Ronaldinho",
            numero: 80
        }
    let response:HttpResponse
    
    if(data){
        response = await OK(data)
    } else{
        response = await noContent()
    }
    
    return response
}