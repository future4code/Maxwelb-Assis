import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios'
import { Card } from '@material-ui/core'
import  ArrowBack  from '@material-ui/icons/ArrowBack'
import  Delete  from '@material-ui/icons/Delete'

const CaixaGrande = styled.div`
    width: 500px;
    height: 640px;
    border: 1px solid;
    margin: 10px auto 0 auto;
`
const Header = styled.div`
    height: 80px;
    margin-top: 0px; 
    text-align: center;
    font-size: 25px;
`

const Cartao = styled(Card)`
    width: 450px;
    margin: 0 auto 0 auto;
`
const Voltar = styled.div`
text-align: center;
color: red;
`
const Lixeira = styled(Delete)`
    color: black;

`


function Match (props) {
    const [matchs, setMatchs] = useState()

    useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/max/matches').then((response) => {
        console.log(response.data.matches)
        setMatchs(response.data.matches)
    }).catch(error => {
        console.log(error)
    })}, []) 
   
    console.log(matchs)
    
    return (
        <div>
            <CaixaGrande>
            <Header>
                <p>AstroMatch</p>
            </Header> 
        <Cartao>
            <ul>
            
         </ul>
        </Cartao>
        
        <Voltar >
            <ArrowBack  onClick={props.voltarPagina} /><Lixeira />
        </Voltar>
        </CaixaGrande>
    
        
        </div>
    )

}

export default Match