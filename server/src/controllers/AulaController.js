// Importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";
import { showAulas } from "../models/AulaModel.js";
import { updateAula } from "../models/AulaModel.js";
import { deleteAula } from "../models/AulaModel.js";
import { showOneAula } from "../models/AulaModel.js";
import { isNullOrEmpty, verificaAula } from "../validations/AulaValidation.js";

export async function criarAulas(req, res) {
    console.log('AulaController criarAula');

    // Criando constante com a requisição
    const aula = req.body;

    // Exibindo corpo de requisição
    console.log(aula);

    if (verificaAula(aula)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenchidas' });
    } else {

        // Tentando criar aula
        try {
            const [status, resposta] = await createAula(aula);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }

    }
}


export async function mostrarAulas(req, res) {
    const aula = req.body;

    // Tentando mostrar aulas
    try {
        const [status, resposta] = await showAulas(aula);
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(502).json(error);
    }
}

export async function atualizarAula(req, res) {
    // Ao ser chamado o criarAula controller virá no console
    console.log('AulaController atualizarAula');

    // Criando constante com a requisição
    const aula = req.body;
    const { id } = req.params;

    if (verificaAula(aula) || isNullOrEmpty(id)) {
        res.status(400).json({ message: 'Todas as propriedades devem ser preenchidas' });
    } else {
        // Tentando atualizar aula
        try {
            const [status, resposta] = await updateAula(aula, id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
}

export async function excluirAula(req, res) {
    // Ao ser chamado o criaAula controller virá no console
    console.log('AulaController excluirAula');

    // Criando constante com a requisição
    const { id } = req.params;

    if (isNullOrEmpty(id)) {
        res.status(400).json({ message: 'O id deve er informado' });
    } else {
        // Tentando deletar aula
        try {
            const [status, resposta] = await deleteAula(id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
    }
    
    export async function mostarUmaAula(req, res) {
        // Ao ser chamado o criaAula controller virá no console
        console.log('AulaController mostarUmaAula');

        // Criando constante com a requisição
        const { id } = req.params;

        // Tentando deletar aula
        try {
            const [status, resposta] = await showOneAula(id);
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }