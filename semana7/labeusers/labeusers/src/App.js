import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Cadastro from './components/cadastro.js'
import Usuarios from './components/usuarios.jsx'



class App extends React.Component {
 state = {
   paginaAtual: "inicio"
 }
 
 mudarPagina = () => {
   const nextPage = this.state.paginaAtual === "inicio" ? "lista" : "inicio"

   this.setState({paginaAtual: nextPage})
 }
 

 
  render (){
  return (
    <div>
      <button onClick={this.mudarPagina}>{this.state.paginaAtual === "inicio" ? "ir para a lista" : "voltar para o formulario"}</button>

      {this.state.paginaAtual === "inicio" ? (<Cadastro />) : (<Usuarios />)}

      
  
    </div>
  );
}
}

export default App;
