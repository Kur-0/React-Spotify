import express from "express";
import conectDB from "./db.js";
import cors from 'cors'
import artista from "./models/Artista.js"

const app = express();
app.use(cors());
const conexao = await conectDB()

conexao.on('error', (erro) => {
    console.error('erro ao conectar', erro)
})

conexao.once('open', () =>{
    console.log('Conectando ao MongoDB')
})

app.get("/artistas", async (req,res) => {
    const listaArtistas = await artista.find({});
    res.status(200).json(listaArtistas)
})

app.listen(3000, () => {
    console.log("Servidor Rodadando")
})