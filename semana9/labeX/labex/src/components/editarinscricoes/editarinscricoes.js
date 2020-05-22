import React from "react";
import Header from "../header";
import Footer from "../footer";
import EditarIncricoesPrincipal from "./editarinscricoesprincipal";


function EditarInscricoes () {
    return(
        <div>
            <Header textoBotao="Inicio" pagina="/"/>
            <EditarIncricoesPrincipal/>
            <Footer/>


        </div>

    )

}

export default EditarInscricoes