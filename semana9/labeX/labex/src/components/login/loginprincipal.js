import React, {useState} from "react";
import axios from 'axios'
import { useHistory} from "react-router-dom"
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

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/max-julian/login";


function Loginprincipal () {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const fazerLogin =  async () =>{
    const body = {
        email: email,
        password: password
      };

      try {
        const response = await axios.post(`${baseUrl}`, body);
  
        localStorage.setItem("token", response.data.token);
        history.push("/privado");
        console.log(response.data.token)
      } catch (e) {
        alert("Usuario ou senha Invalidos")
        localStorage.clear()
      }
    
    }  

    const irCadastro = () => {
        history.push("/signup")
    }
    
    return (

    <Conteiner maxWidth="xl" >
        <Cartao color="primary" variant="outlined" >
        <h3>Login</h3><br/>
        <CaixaTexto onChange={e => setEmail(e.target.value)} value={email} id="outlined-search" label="Email" type="search" variant="outlined"/><br/>
        <CaixaTexto onChange={e => setPassword(e.target.value)} value={password} id="outlined-search" label="Senha" type="password" variant="outlined"/><br/><br/>
        <Button color='secondary' variant="contained" onClick={fazerLogin}>Entrar</Button><br/>
        <span>Nao Possui Conta?<a href="#" onClick={irCadastro}> Cadastre-se</a></span>
        </Cartao>


    </Conteiner>    


)

}


export default Loginprincipal