import React from 'react';

import './App.css';


import Tarefas from './Componentes/Tarefas';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Lista de Tarefas</h1>
      </header>
      <Tarefas className="Tarefas"/>
    </div>
  );
}
export default App;
