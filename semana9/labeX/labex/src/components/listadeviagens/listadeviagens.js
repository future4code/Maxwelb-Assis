import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import Footer from "../footer";
import ListaDeViagensPrincipal from "./listadeviagensprincipal";


function ListaDeViagens () {
    return(
        <div>
            <Header textoBotao="Inicio" pagina="/"/>
            <ListaDeViagensPrincipal/>
            <Footer/>

        </div>

    )

}

export default ListaDeViagens