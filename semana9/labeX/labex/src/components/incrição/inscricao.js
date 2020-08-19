import React from "react";
import { useHistory } from "react-router-dom"
import Header from "../header";
import Footer from "../footer"
import InscricaoPrincipal from "./inscricaoprincipal";



function Inscricao () {
    return(
        <div>
         <Header pagina="/" textoBotao="Inicio"/>   
         <InscricaoPrincipal/>   
         <Footer/>   
        </div>

    )

}

export default Inscricao