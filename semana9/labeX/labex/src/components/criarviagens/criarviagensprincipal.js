import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';

const Conteiner = styled.div`
    display: flex;
    height: 500px;

`
const Cartao = styled(Card)`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 400px;
    height: 470px;
    margin: 0px auto 30px auto;
    position: relative;
    top: 15px;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`
const CaixaTexto = styled(TextField)`
   width: 300px;
    
`
const Selecti = styled(Select)`
    
    
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;

`

const Botao = styled(Button)`
    width: 90px;
    position: relative;
    left: 100px;
`


function CriarViagensPrincipal () {

    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          history.push("/login");
        }
      }, [history]);

    const hoje = new Date().toISOString().split("T")[0];

    return(
        <div>
            <Conteiner maxWidth="xl">
            <Cartao color="primary" variant="outlined">
            <h3>Crie uma Viagem</h3><br/>
            <Formulario>
            <CaixaTexto inputProps={{ pattern: "[a-zA-Z]{5,}", title: "deve possuir no minimo 5 letras!" }} id="outlined-search" label="Nome da Viagem" type="search" variant="outlined" required/><br/>
            <Selecti variant="outlined" required>   
            <option value={10}>Mercúrio</option>
            <option value={20}>Vênus</option>
            <option value={30}>Terra</option>
            <option value={10}>Marte</option>
            <option value={10}>Júpiter</option>
            <option value={10}>Saturno</option>
            <option value={10}>Urano</option>
            <option value={10}>Netuno</option>
            <option value={10}>Plutão</option>
            </Selecti><br/>
            <CaixaTexto  inputProps={{ pattern: "[a-zA-Z0-9]{5}", title: "deve possuir no minimo 5 letras!", min: hoje}} id="outlined-search" label="" type="date" variant="outlined" required/><br/>
            <CaixaTexto  inputProps={{ pattern: "[a-z ][a-zA-Z0-30 ]{30,}", title: "deve possuir no minimo 30 letras!" }} id="outlined-search" label="Descrição" type="search" variant="outlined" required/><br/>
            <CaixaTexto  inputProps={{ pattern: "[a-zA-Z0-9]{0,5}", title: "limitado a 50 dias", max: 50 }} id="outlined-search" label="Duração em Dias" type="number" variant="outlined" required/><br/>
            <Botao type="submit" color='secondary' variant="contained">Enviar</Botao><br/>
            </Formulario>
            </Cartao>
            </Conteiner>
        </div>




    )

}

export default CriarViagensPrincipal