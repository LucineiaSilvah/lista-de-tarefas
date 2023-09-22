import React, { useState } from "react";
import './App.css'
import Tarefas from "./componentes/Tarefas/Tarefas";
import AddTarefa from "./componentes/Tarefas/AddTarefa";
import { v4 as uuidv4 } from "uuid";
import Cabacalho from "./componentes/Tarefas/Cabecalho";

const App = ()=>{

 let [tarefa, setTarefa] = useState([
  {
    id: '1',
    title: 'Estudar React',
    completed: false,
  },
  {
    id: '2',
    title: 'Ler um Artigo',
    completed: false,
  },
 ])
 const handleTarefaClick = (tarefaId) =>{
  const newTarefa = tarefa.map( (tarefa) => {
    if(tarefa.id === tarefaId) return {...tarefa, completed: !tarefa.completed}
    else{return tarefa}
  })
  setTarefa(newTarefa)
}

  const handleAdicaoDeTarefa = (tarefaTitulo) =>{
    const newTarefa = [...tarefa,{
    title: tarefaTitulo,
    id: Math.random(uuidv4),
    completed: false
    } ]

    setTarefa(newTarefa)
  }


   const handleRemocaoDeTarefa = (tarefaId)=>{
  const newTarefa = tarefa.filter(tarefa => tarefa.id !== tarefaId)
     setTarefa(newTarefa)
   }
  return (
  <>
    <div 
    className="container">
      <Cabacalho/>
      <AddTarefa
      handleAdicaoDeTarefa={handleAdicaoDeTarefa}
      
      />
      <Tarefas
      tarefas={tarefa}
      handleTarefaClick={handleTarefaClick}
      handleRemocaoDeTarefa={handleRemocaoDeTarefa}
      /> 
    </div>

    
  </>
  
  )
}

export default App