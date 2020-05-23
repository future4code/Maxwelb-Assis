import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
height: 480px;
width: 100%;
align-items: center;
justify-content: space-around;

`
const Imagem = styled.img`
width: 390px;

`
const Botao = styled(Button)`
    margin-left: 20px;
    position: relative;
    left: 40px;

` 


function ConteudoInicio () {

    const history = useHistory()

    const submit = () => {
    history.push("/inscricao")
}

    return(
        <Container>
        <Botao variant="outlined" color='secondary' onClick={submit}>Clique Aqui !!! e Inscreva-se agora<br/>para Participar de uma de Nossas Viagens<br/>Interplanetarias</Botao>
        <Imagem src="https://images2.imgbox.com/41/5e/uho7Rsre_o.jpg"></Imagem>



        </Container>

    )


}

export default ConteudoInicio