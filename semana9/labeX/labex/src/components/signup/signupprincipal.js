import React, {useState} from "react";
import { useHistory } from "react-router-dom"
import axios from 'axios'
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

function SignupPrincipal () {
    const[inputEmail, setInputEmail] = useState("")
    const[inputSenha, setInputSenha] = useState("")

    const onchangeEmail = (event) => {
        setInputEmail(event.target.value)
    }

    const onchangeSenha = (event) => {
        setInputSenha(event.target.value)
    }

    const body = {
        email: inputEmail,
        password: inputSenha
    }

    const history = useHistory()

    const cadastro = () => { axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/max-julian/signup', body).then((response) => {
        console.log(response)
        alert("Cadastro Efetuado com Sucesso")
        history.push("/login")
    }).catch(error => {
        console.log(error.response)
    })
}


    return(
        <Conteiner>
            <Cartao color="primary" variant="outlined">
                <h3>Crie uma Conta</h3><br/>
            <CaixaTexto onChange={onchangeEmail} value={inputEmail} id="outlined-search" label="Email" type="search" variant="outlined"/><br/>
            <CaixaTexto onChange={onchangeSenha} value={inputSenha} id="outlined-search" label="Senha" type="password" variant="outlined"/><br/><br/>
            <Button onClick={cadastro} color='secondary' variant="contained">Cadastrar-se</Button><br/>
            </Cartao>
        </Conteiner>

    )


}

export default SignupPrincipal