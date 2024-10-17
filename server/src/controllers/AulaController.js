// Importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";
import { showAulas } from "../models/AulaModel.js";

export async function criarAulas(req,res) {
    console.log('AulaController criarAula');
    
    // Criando constante com a requisição
    const aula = req.body;

    // Exibindo corpo de requisição
    console.log(aula);
    // Tentando criar aula
    try {
        const [status,resposta] = await createAula(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}
export async function mostrarAulas(req,res){
    const aula = req.body;
    
    try {
        const [status, resposta] = await showAulas(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }  
}