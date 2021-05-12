import 'reflect-metadata'
import './database'
import express, { response } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
    // return response.send("salve meu peixe");
    return response.json({message: "salve meu peixe"});
})

// 1º parametro => rota
// 2º parametro => request, response

app.post("/", (request, response) => {
    return response.json({message: "opa meu bom"})
})

app.listen(3333, () => console.log("Server is running!"))