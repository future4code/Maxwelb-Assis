import React from "react";
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const Conteiner = styled(Container)`
    display: flex;
    height: 480px;

`

const Cartao = styled(Card)`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 400px;
    height: 400px;
    margin: auto;
    position: relative;
    top: 15px;
    align-items: center;
    justify-content: center;
`
const CaixaTexto = styled(TextField)`
    width: 300px;
    text-align: center;
    margin-top: 10px;


`



function Loginprincipal () {

const history = useHistory()

const acessarAreaPrivada = () => {
    history.push("/privado")

}

const irCadastro = () => {
    history.push("/signup")


}

    return (

    <Conteiner maxWidth="xl" >
        <Cartao color="primary" variant="outlined" >
        <h3>Login</h3><br/>
        <CaixaTexto id="outlined-search" label="Email" type="search" variant="outlined"/><br/>
        <CaixaTexto id="outlined-search" label="Senha" type="search" variant="outlined"/><br/><br/>
        <Button color='secondary' variant="contained" onClick={acessarAreaPrivada}>Entrar</Button><br/>
        <span>Nao Possui Conta? <a href="#" onClick={irCadastro}>Cadastre-se</a></span>
        </Cartao>


    </Conteiner>    


)

}


export default Loginprincipal