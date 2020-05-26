import React from "react";
import Header from "../header";
import Footer from "../footer";
import EditarIncricoesPrincipal from "./editarinscricoesprincipal";


function EditarInscricoes () {
    return(
        <div>
            <Header textoBotao="Logout" pagina="/"/>
            <EditarIncricoesPrincipal/>
            <Footer/>


        </div>

    )

}

export default EditarInscricoes