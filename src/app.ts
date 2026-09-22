import express,{json, Request, Response} from "express"
import { getPlayer } from "./controllers/players-controllers"



export const createAPP = ()=>{
    const app = express()

    app.use(json())

    app.get("/",getPlayer)

    return app
}

