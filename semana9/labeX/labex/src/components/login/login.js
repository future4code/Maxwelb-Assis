import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import Loginprincipal from "./loginprincipal";
import Footer from "../footer"

const Login = (props) => {
  
  return (
    <div>
      <Header textoBotao="Inicio" pagina="/"/>
      <Loginprincipal/>
      <Footer/>
    </div>
  );
};

export default Login;