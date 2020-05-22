import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer"
import SignupPrincipal from "./signupprincipal";



function Signup () {
    return (
        <div>
        <Header textoBotao="Inicio" pagina="/"/>
        <SignupPrincipal/>
        <Footer/>
        </div>
    )



}

export default Signup