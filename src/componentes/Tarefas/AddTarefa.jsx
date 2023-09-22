import React, { useState } from 'react';
import Botao from './Botao';
import './AddTarefa.css'

const AddTarefa = ({handleAdicaoDeTarefa})=>{
  const [novaTarefa, setNovaTarefa] = useState('')
  const handleNovaTarefa = (e)=>{
   setNovaTarefa(e.target.value)
  }

  const handleAddTarefaClick = () =>{
    handleAdicaoDeTarefa(novaTarefa)
    setNovaTarefa('')
  }
  return(
    <>
    <div className='entrada'>

    <input
    onChange={handleNovaTarefa}
    value={novaTarefa}
    type="text"/>
    <Botao
    onClick={handleAddTarefaClick}
    >Adicionar</Botao>
    </div>
    </>

  )
}

export default AddTarefa