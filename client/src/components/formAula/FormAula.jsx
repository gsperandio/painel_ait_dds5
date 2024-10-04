import React from 'react'
import NavBar from '../layout/Navbar';
import {useState} from 'react';

function FormAula() {
    const [dataAula, setDataAula] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [turma, setTurma] = useState('');
    const [instrutor, setInstrutor] = useState('');
    const [unidadeCurricular, setUnidadeCurricular] = useState('');
    const [ambiente, setAmbiente] = useState('');
   

    async function cadastrarAula(e) {
        e.preventDefault();
        console.log(dataAula, horaInicio, horaFim, turma, instrutor, unidadeCurricular, ambiente)
        const infoAula = {
            data:dataAula,
            data_hora_inicio:horaInicio,
            data_hora_fim:horaFim,
            turma:turma,
            instrutor:instrutor,
            unidade_curricular:unidadeCurricular,
            ambiente:ambiente,
            chave:null
        };

        try {
            const resposta = await fetch('http://localhost:5000/aulas',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(infoAula)
            })

            if(!resposta.ok){
                console.log('Erro ao cadastrar aula');
            }else{
                alert('Aula cadastrada com sucesso');
            }

        } catch (error) {
            console.error('Erro ao cadastrar Aula', error)
        }
        
    }
    return (
        <>
            <div className='container col-sm-12 col-md-6 col-lg-3 mt-3'>
                <h3 className="text-center">Cadastro Aula</h3>
                <form onSubmit={cadastrarAula}>
                    <label className='form-label' htmlFor="">data:</label>
                    <input className='form-control' type="date" name="" id="" value={dataAula} onChange={(e) => (setDataAula(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora início:</label>
                    <input className='form-control' type="time" name="" id="" value={horaInicio} onChange={(e) => (setHoraInicio(e.target.value))} />

                    <label className='form-label' htmlFor="">Hora fim:</label>
                    <input className='form-control' type="time" name="" id="" value={horaFim} onChange={(e) => (setHoraFim(e.target.value))} />

                    <label className='form-label' htmlFor="">Turma:</label>
                    <input className='form-control' type="text" name="" id="" value={turma} onChange={(e) => (setTurma(e.target.value))} />

                    <label className='form-label' htmlFor="">Intrutor:</label>
                    <input className='form-control' type="text" value={instrutor} onChange={(e) => (setInstrutor(e.target.value))} />

                    <label className='form-label' htmlFor="">Unidade currícular:</label>
                    <input className='form-control' type="text" value={unidadeCurricular} onChange={(e) => (setUnidadeCurricular(e.target.value))} />

                    <label className='form-label' htmlFor="">Ambiente:</label>
                    <input className='form-control' type="text" name="" id="" value={ambiente} onChange={(e) => (setAmbiente(e.target.value))} />

                    <a className='btn btn-danger mt-3 float-start' href="">Cancelar</a>
                    <button className='btn btn-success mt-3 float-end' type='submit'>Salvar</button>
                </form>
            </div>
        </>
    )
}

export default FormAula