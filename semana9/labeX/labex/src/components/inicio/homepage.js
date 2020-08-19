import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header";
import { Button } from '@material-ui/core'
import ConteudoInicio from "./conteudoinicio"
import Footer from "../footer";


function HomePage (props) {
  
  return (
    <div>
      <Header textoBotao="Login" pagina="login"/>
      <ConteudoInicio/>
      <Footer/>
      
     
    </div>
  );
};

export default HomePage

