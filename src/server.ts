import express from "express"
import { createAPP } from "./app";

const app = createAPP()
const port = process.env.PORT





app.listen(port,()=>{
    console.log(`Servidor ON !!🪐. Na porta ${port}`);
    
})