import express, { response } from 'express';

const app = express();

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