// Importando funções do AulaModel
import { createAula } from "../models/AulaModel.js";

export async function criar(params) {
    console.log('AulaController criarAula');
    
    // Criando constante com a requisição
    const aula = req.body;

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
    return res.status(200).json(
        [
            {
                "id": "1280",
                "data": "2024-08-29T03:00:00.000Z",
                "data_hora_inicio": "2024-08-29T21:00:00.000Z",
                "data_hora_fim": "2024-08-30T01:00:00.000Z",
                "turma": "UMO-MBMM-03",
                "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
                "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
                "ambiente": "VTRIA-EXTER-EXTERNO",
                "chave": null
            }
        ]
    );
}