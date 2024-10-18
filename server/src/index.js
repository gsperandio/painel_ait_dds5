// Importanto express
import express from 'express';
// Importando cors
import cors from 'cors';
// Importando funções (metodos do controller)
import { mostrarAulas, criarAulas, atualizarAula, excluirAula } from './controllers/AulaController.js';

//Chamando função express
const app = express();
const porta = 5000;

// Habilitando cors
app.use(cors());

// Habilitando JSON
app.use(express.json());

//Rota padrão para teste de API
app.get('/',(req,res)=>{
    res.send('Teste de API funcionando')
});

//Rotas de aulas
app.post('/aulas', criarAulas);
app.get('/aulas', mostrarAulas);
app.put('/aulas/:id',atualizarAula);
app.delete('/aulas/:id',excluirAula);

//Iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});

