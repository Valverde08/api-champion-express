import express,{json, Request, Response} from "express"



export const createAPP = ()=>{
    const app = express()

    app.use(json())

    app.get("/",(req:Request, res:Response)=>{
        res.status(200).json({
            nome: "Ronaldinho",
            numero: 80
        })
    })

    return app
}

