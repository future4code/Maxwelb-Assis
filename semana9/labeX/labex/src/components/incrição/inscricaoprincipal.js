import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 550px;
    text-align: center;
    
`

const Cartao = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    height: 430px;
    margin: 0px auto 0 auto;



`
const CaixaTexto = styled(TextField)`
    width: 400px;
    height: 150px;
    margin-top: 5px;
`

function InscricaoPrincipal () {
    return(
        <Container><br/>
            <h3>Inscreva-se para Participar de uma de Nossas Viagens</h3><br/>
            <Cartao color="primary" variant="outlined"><br/>
            <CaixaTexto  id="outlined-search" label="Nome" type="search" variant="outlined"/>
            <CaixaTexto  id="outlined-search" label="Idade" type="number" variant="outlined"/>
            <CaixaTexto  id="outlined-search" label="Porque voce deve ser escolhido?" type="search" variant="outlined"/>
            <CaixaTexto  id="outlined-search" label="Profissao" type="search" variant="outlined"/>
            <CaixaTexto  id="outlined-search" label="Nacionalidade" type="search" variant="outlined"/>
            <Button color='secondary' variant="contained">Enviar</Button><br/>
            </Cartao>

        </Container>

    )


}

export default InscricaoPrincipal