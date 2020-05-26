import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import AreaPrivadaPrincipal from "./areaprivadaprincipal";




function AreaPrivada (props) {
    return(
        <div>
           <Header textoBotao="Logout" pagina="/"/>
           <AreaPrivadaPrincipal/>
           <Footer/>
        </div>
        


    )


}


export default AreaPrivada