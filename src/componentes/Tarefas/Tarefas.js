import React from 'react'
import './Tarefas.css'
import Tarefa from './Tarefa';

const Tarefas = ({tarefas,handleTarefaClick,handleRemocaoDeTarefa})=>{

  console.log(tarefas);
return(
  <>
  {tarefas.map(tarefa =>
  <Tarefa
  handleTarefaClick={handleTarefaClick}
  tarefa={tarefa}
  handleRemocaoDeTarefa={handleRemocaoDeTarefa}
  />)}
  
  
  
  </>
)
}


export default Tarefas