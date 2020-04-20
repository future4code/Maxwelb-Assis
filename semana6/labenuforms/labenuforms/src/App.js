import React from 'react';
import './App.css';
import { Etapa1 } from './components/etapa1.js';
import { Etapa2 } from './components/etapa2.js';
import { Etapa3 } from './components/etapa3.js';
import { Final } from './components/final.js';
import styled from 'styled-components';


class App extends React.Component {
  state = {
    etapa: 1,
  }
  
  render () {
      return (
        <div>
          {this.renderizaEtapa()}
          <button onClick={this.proximaEtapa}>Próxima Etapa</button>
        </div>
      )
    }
  }

 renderizaEtapa = () =>{
   switch (this.state.etapa) {
     case 1:
       return <Etapa1 />
      break
      case 2:
        return <Etapa2 />
       break
       case 3:
         return <Etapa3 /> 
        break
       case 4:
         return <Final /> 
        default:
          return <Etapa1 /> 
   }

 }

proximaEtapa = () => {
alert("testando ehehhehe")
}





 export default App