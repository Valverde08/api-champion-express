import express,{json} from "express"

import router from "./routes"



export const createAPP = ()=>{
    const app = express()

    app.use(json())

    app.use("/api", router)

    return app
}

