import { useState } from 'react';
import * as React from 'react';
import './App.css';
import Usuarios from './components/Usuarios';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Detalhes from './components/Detalhes';
function App() {


  fetch('https://reqres.in/api/users')
  .then(resposta=> resposta.json())
  .then(dados=>{
    console.log(dados.data)
  })
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Usuarios/>}></Route>

          <Route path='/detalhes/:id' element={<Detalhes/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
