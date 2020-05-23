import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';

const Conteiner = styled.div`
    display: flex;
    height: 490px;

`
const Cartao = styled(Card)`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 400px;
    height: 450px;
    margin: 0px auto 30px auto;
    position: relative;
    top: 15px;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
`
const CaixaTexto = styled(TextField)`
    width: 300px;
    height: 100px;
    text-align: center;
    
`
const Selecti = styled(Select)`
    width:300px;
    bottom:6px;
    
`




function CriarViagensPrincipal () {
    return(
        <div>
            <Conteiner maxWidth="xl">
            <Cartao color="primary" variant="outlined">
            <h3>Crie uma Viagem</h3><br/>
            <CaixaTexto id="outlined-search" label="Nome da Viagem" type="search" variant="outlined"/>
            <Selecti variant="outlined">   
            <option value={10}>Mercúrio</option>
            <option value={20}>Vênus</option>
            <option value={30}>Terra</option>
            <option value={10}>Marte</option>
            <option value={10}>Júpiter</option>
            <option value={10}>Saturno</option>
            <option value={10}>Urano</option>
            <option value={10}>Netuno</option>
            <option value={10}>Plutão</option>
            </Selecti>
            <CaixaTexto id="outlined-search" label="" type="date" variant="outlined"/>
            <CaixaTexto id="outlined-search" label="Descrição" type="search" variant="outlined"/>
            <CaixaTexto id="outlined-search" label="Duração em Dias" type="search" variant="outlined"/><br/>
            <Button color='secondary' variant="contained">Enviar</Button><br/>
            </Cartao>
            </Conteiner>
        </div>




    )

}

export default CriarViagensPrincipal