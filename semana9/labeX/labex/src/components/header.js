import React from "react";
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    background-color: #3f3f44;
`
const Titulo = styled.span`
    font-size: 40px;
    color: white;
    align-self: center;
    margin-left: 25px;
`

const AreaPrivada = styled(Button)`
    height: 40px;
    width: 80px;
    align-self: flex-end;
    position: relative;
    bottom: 10px;
    right: 15px;


`



function Header (props) {

    const history = useHistory();

  const mudarPagina = () => {
    history.push(props.pagina);
  };





    return(
        <div>
        <Menu>
         <Titulo>LabeX</Titulo><AreaPrivada size='small' color='secondary' variant="contained" onClick={mudarPagina}>{props.textoBotao}</AreaPrivada>
          

        </Menu>


        </div>


    )

}


export default Header;