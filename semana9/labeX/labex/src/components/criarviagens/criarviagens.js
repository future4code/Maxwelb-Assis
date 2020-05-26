import React from "react";
import CriarViagensPrincipal from "./criarviagensprincipal";
import Header from "../header";
import Footer from "../footer";

function CriarViagens () {
    return(
        <div>
            <Header pagina="/" textoBotao="Logout"/>
            <CriarViagensPrincipal/>
            <Footer/>



        </div>


    )

}


export default CriarViagens