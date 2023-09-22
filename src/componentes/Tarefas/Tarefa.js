import React from 'react';

import './Tarefa.css'

import {CgClose, CgInfo } from 'react-icons/cg';
const Tarefa = ({tarefa, handleTarefaClick,handleRemocaoDeTarefa})=>{
  return(
  <div className='tarefa-container'
  style={tarefa.completed ? {borderLeft:" 6px solid  rgb(158, 3, 219)"}: {}}
  >
  <div className='tarefa-titulo'
  onClick={()=>handleTarefaClick(tarefa.id)}
  >
  {tarefa.title}
</div>

   <div className='botoes-container'>
     <button className='btn-remove-tarefa'
     onClick={()=>handleRemocaoDeTarefa(tarefa.id)}
     >
      <CgClose/>
     </button>
     <button className='btn-info-tarefa'
   
     >
      <CgInfo/>
     </button>
   </div>
  </div>

  )
}

export default Tarefa