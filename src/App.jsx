import React from 'react';
import './App.css';

function App() {
  const [Tema, setTema] = React.useState('claro');

  function mudarTema() {
    if (Tema === 'claro') (
      setTema('escuro')
    )
    else (
      setTema('claro')
    )
  }
  return (
    <div className='container' style={{ backgroundColor: Tema === 'claro' ? '#FFF' : '#000' }}>

      <button className='button' onClick={mudarTema} style={{ background: Tema === 'escuro' ? '#000' : '#000' }}>{Tema}</button>
      
    </div>
  );
}

export default App;
