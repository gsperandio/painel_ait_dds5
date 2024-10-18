import mysql from 'mysql2/promise';
import db from '../conexao.js';



export async function createAula(aula) {
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    const sql = `INSERT INTO aulas (
    data, 
    data_hora_inicio, 
    data_hora_fim, 
    turma, 
    instrutor,
    unidade_curricular,
    ambiente
    )
    VALUES (?,?,?,?,?,?,?)`;

    // Definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    // Executando query no banco
    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Aula Cadastrada');
        return [201, 'Aula Cadastrada'];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function showAulas(aula) {
    const conexao = mysql.createPool(db);
    const sql = `SELECT * FROM aulas`;

    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente
    ];

    try {
        const [retorno] = await conexao.query(sql,params);
        console.log('Mostrando aulas');
        return[200, retorno]
    } catch (error) {
        console.log(error);
        return[502, error];
    }
}

export async function updateAula(aula,id) {
    // Criando conexão para o banco de dados usando configurações de 'db'
    const conexao = mysql.createPool(db);

    // Ao ser acionado o metodo createAula retorna na tela
    console.log('Entrando no Model Aula');

    // Criando String com comandos sql
    const sql = `UPDATE aulas SET data = ?,
    data_hora_inicio = ?,
    data_hora_fim = ?,
    turma = ?,
    instrutor = ?,
    unidade_curricular = ?,
    ambiente = ?
    WHERE id = ?
    `

    // Definindo parametros para inserir no sql
    const params = [
        aula.data,
        aula.data_hora_inicio,
        aula.data_hora_fim,
        aula.turma,
        aula.instrutor,
        aula.unidade_curricular,
        aula.ambiente,
        id
    ];

    // Executando query no banco
    try {
        const [retorno] = await conexao.query(sql, params);
        console.log('Atualizando aula');
        return [200, retorno];
    } catch (error) {
        console.log(error);
        return [500, error];
    }
}

export async function deleteAula(id) {
    // Criando conexão para o banco de dados usando configutações de 'db'
    const conexao = mysql.createPool(db);
    console.log('Deletando no model Aula');
    const sql = `DELETE FROM aulas WHERE id = ?`

    const params = [id];

    try {
        const [retorno] = await conexao.query(sql,params);
        console.log('Deletando aula');
        return[200, retorno]
    } catch (error) {
        console.log(error);
        return[500, error];
    }
}