import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../layout/Navbar';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import { Link, useParams } from 'react-router-dom';


function GestaoAulas() {
  const {tipo} = useParams();
  const[exibeAlerta, setExibeAlerta] = useState(false);
  const[tipoMensagem, setTipoMensagem] = useState(tipo);
  const[classeMensagem, setClasseMensagem] = useState('');
  const[textoMensagem, setTextoMensagem] = useState('');

  useEffect(()=>{
    if(tipoMensagem){
      setExibeAlerta(true);
      atualizaMensagem();
      setTimeout(()=>{
        setExibeAlerta(false);
        setTipoMensagem('');
      },5000);
    }
  },[tipoMensagem]);

  function mensagemDelete(){
    setTipoMensagem('deletada');
  }
 
  function atualizaMensagem(){
    switch(tipoMensagem){
      case 'cadastrada':
        setClasseMensagem('alert alert-success')
        setTextoMensagem('Aula Cadastrada')
        break;
      case 'deletada':
        setClasseMensagem('alert alert-danger')
        setTextoMensagem('Aula Deletada')
        break;
      case 'editada':
        setClasseMensagem('alert alert-primary')
        setTextoMensagem('Aula Editada')
        break;
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='text-center mt-3'>Gestão de Aulas</h1>
        {exibeAlerta && <div className={classeMensagem}>{textoMensagem}</div>}
        <div className='col-12 text-end my-2'>
          <Link to='/cadastro_aula' className='btn btn-primary'>Cadastro aula</Link>
        </div>
        <TabelaAulas tipo='edit' onDeleteSuccess={mensagemDelete}/>
      </div>
    </>
  )
}

export default GestaoAulas;