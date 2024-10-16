// Importanto express
import express from 'express';
// Importando cors
import cors from 'cors';
// Importando funções (metodos do controller)
import { mostrarAulas, criarAulas } from './controllers/AulaController.js';

//Chamando função express
const app = express();
const porta = 5000;

// Habilitando cors
app.use(cors());

//Rota padrão para teste de API
app.get('/',(req,res)=>{
    res.send('Teste de API funcionando')
});

//Rotas de aulas
app.post('/aulas', criarAulas);
app.get('/aulas', mostrarAulas);

//Iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});

