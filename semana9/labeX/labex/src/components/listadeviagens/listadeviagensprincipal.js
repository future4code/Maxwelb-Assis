import React, {useEffect, useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import Card from '@material-ui/core/Card'



const Container = styled.div`

  text-align: center;
  
  

`
const Cartao = styled(Card)`
    :hover {
      color: #ff1744;
    }
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: left;
    width: 300px;
    height: 230px;
    margin: 0px auto 0px auto;
    margin-top: 10px;
    margin-bottom: 10px;

`
const Cartoes = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`

const Titulo = styled.div`
  justify-content: center;
  margin-top: 10px;
`

const Items = styled.p`
  margin-top: 30px;
`
const Items2 = styled.p`
  margin-top: 10px;

`

function ListaDeViagensPrincipal () {
  const [viagens, setViagens] = useState([])
    const history = useHistory()

     useEffect(() => {
        
          axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/max-julian/trips').then((response) => {
            setViagens(response.data.trips)
            console.log(response)
        }).catch(error => {
            console.log(error.response)
        })
        
        }, []); 

        const selecionarViagem = () => {
          history.push("/inscricao")



        }


      return(
       <>
       <Container>
        <Titulo>
        <h3>Escolha seu Destino</h3><br/>
        </Titulo>
        <Cartoes>
        {viagens.map(function (user) {
          return <Cartao onClick={selecionarViagem} variant="outlined"><Items><b>Nome: </b>{user.name}</Items>
          <Items2><b>Planeta: </b>{user.planet}</Items2>
          <Items2><b>info: </b>{user.description}</Items2>
          <Items2><b>Data: </b>{user.date}</Items2>
          <Items2><b>Duração: </b>{user.durationInDays}</Items2>
          </Cartao>
        })}  
        </Cartoes>
      </Container>
      </>
      )


}

export default ListaDeViagensPrincipal