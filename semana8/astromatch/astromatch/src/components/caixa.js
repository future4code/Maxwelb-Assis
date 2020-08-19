import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import axios from 'axios'
import { Card } from '@material-ui/core'
import  Done  from '@material-ui/icons/Done'
import HighlightOff from '@material-ui/icons/HighlightOff'
import  Favorite  from '@material-ui/icons/Favorite'


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
const Foto = styled(Card)`
    text-align: center;
`

const Cartao = styled(Card)`
    /*width: 450px;*/
    max-height: 350px;
    margin: 0 auto 0 auto;
`

const Dados = styled.div`
text-align: center;

`

const Botoes = styled.div`
    text-align: center;

`

const Ok = styled(Done)`
  color: green;
  font-size: 52px;
`

const Coracao = styled(Favorite)`
color: red;
`

function Caixa (props) {
    const [fotos, setFotos] = useState("")
    const [fotoAtual, setFotoAtual] = useState("")
    const [idade, setIdade] = useState()
    const [name, setName] = useState("")


 useEffect(() => {

 axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/max/person').then((response) => {
        console.log(response.data.profile)
        setFotos(response.data.profile.photo)
        setFotoAtual(response.data.profile.id)
        setName(response.data.profile.name)
        setIdade(response.data.profile.age)
    }).catch(error => {
        console.log(error)
    })}, []) 



const pegaPerfil = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/max/person').then((response) => {
        console.log(response.data.profile)
        setFotos(response.data.profile.photo)
        setFotoAtual(response.data.profile.id)
        setName(response.data.profile.name)
        setIdade(response.data.profile.age)
    }).catch(error => {
        console.log(error)
    }) }


    const Selecionar = () => {
        const body = {"id": (`${fotoAtual}`) ,
        "choice": true }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/max/choose-person', body 
        ).then((response) => {
            console.log(response)      
        }).catch(error => {
            console.log(error.response)
        })
        pegaPerfil()
        
    }


    const Negar = () => {
        const body = {"id": (`${fotoAtual}`) ,
        "choice": false }

        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/max/choose-person', body 
        ).then((response) => {
            console.log(response)      
        }).catch(error => {
            console.log(error.response)
        })
        pegaPerfil()
    }

    return(
        <CaixaGrande>
            <Header>
                <p>AstroMatch</p>
            </Header>
            
            <Cartao variant="outlined">
            <Foto>     
            <img src={fotos} width="300px"></img>
            </Foto>

            </Cartao>
            <Dados>

            <p><i>Nome: {name}</i></p>
            <p>Idade: {idade}</p>

            </Dados>
           
            <Botoes>

            <HighlightOff onClick={Negar} /><Ok onClick={Selecionar} /> 
            <Coracao onClick={props.match}/> 
            
                  
            </Botoes>
            
        </CaixaGrande>


    )

}


export default Caixa