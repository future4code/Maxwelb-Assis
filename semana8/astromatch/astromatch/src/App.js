import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from "styled-components"
import Caixa from './components/caixa';
import Match from './components/match'



function App(props) {
  const [pagina, setPagina] = useState(true)


 const voltar = () => {
   setPagina(true)
 }

 const deuMatch = () => {
   setPagina(false)
 }
 


  if(pagina){
    return <Caixa match={deuMatch}/>
  }else {
    return <Match voltarPagina={voltar} />
  }

}


export default App
