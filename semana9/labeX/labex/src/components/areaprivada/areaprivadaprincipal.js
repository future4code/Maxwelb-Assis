import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import { Button } from '@material-ui/core'


const Conteiner = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 480px;
       

`

const Botao = styled(Button)`
    padding: 20px;


`


function AreaPrivadaPrincipal () {

        const history = useHistory()

        useEffect(() => {
            const token = localStorage.getItem("token");
        
            if (token === null) {
              history.push("/login");
            }
          }, [history]);


        const irCriarViagens = () => {
            history.push("/criarviagens")
        }

        const irEditarInscricoes = () => {
            history.push("/editarinscricoes")
            
        }


    return(
        <Conteiner maxWidth="xl" >
            <Botao onClick={irCriarViagens} variant="outlined" color='secondary'>Crie Uma Viagem<br/> Interplanetaria</Botao>
            <Botao onClick={irEditarInscricoes} variant="outlined" color='secondary'>Edite as Inscriçoes</Botao>


        </Conteiner>

    )


}

export default AreaPrivadaPrincipal