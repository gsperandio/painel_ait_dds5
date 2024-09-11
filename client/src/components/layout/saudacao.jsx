import { useEffect, useState } from "react";
import styles from './Saudacao.module.css';

// Criando função Saudacao
function Saudacao(){
    // Criando estado de saudacao
    const [saudacaoPeriodo, setSaudacaoPeriodo] = useState('');
    
    // Chamando função de saudação edefinindo um intervalo de 1 segundo
    useEffect(()=>{
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[])

    // criando texto de saudação do cabeçalho
    function atualizaSaudacao(){
        //  Declarando objeto do tipo Date
        const agora = new Date();

        // Obtendo hora em inteiro exemplo 07:35:00 retornou 7
        const hora = agora.getHours();

        // Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado que retorna 6
        const dia = agora.getDay();

        // Declarando variavel do texto de saudação
        let textoSaudacao = '';

        // Definindo array com dias da semana
        const diaSemana = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feria',
            'Quinta-feira',
            'Sábado'
        ]

        // Adiconando o dia da semana ao textoSaudacao
        textoSaudacao += diaSemana[dia];
        // Adiconando saudação ao textoSaudacao
        if (hora >= 18){
            textoSaudacao += ' Boa Noite';
        }
        else if(hora >= 12){
            textoSaudacao += ' Boa Tarde'
        }
        else{
            textoSaudacao += ' Bom Dia'
        }
        // Chamando função de atribuição
        setSaudacaoPeriodo(textoSaudacao);
    }
    
    
    return (
        <div className={styles.saudacao}>{saudacaoPeriodo}</div>
    )
}

export default Saudacao;