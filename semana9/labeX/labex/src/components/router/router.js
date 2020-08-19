import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import HomePage from '../inicio/homepage';
import Login from '../login/login';
import AreaPrivada from '../areaprivada/areaprivada';
import Inscricao from '../incrição/inscricao';
import ListaDeViagens from '../listadeviagens/listadeviagens';
import CriarViagens from '../criarviagens/criarviagens';
import EditarInscricoes from '../editarinscricoes/editarinscricoes';
import Signup from '../signup/signup';



function Router() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      
      <Route path="/" exact={true}>
        <HomePage/>
      </Route> 

      <Route path="/login" exact={true}>
        <Login/>
      </Route> 

      <Route path="/privado" exact={true}>
        <AreaPrivada/>
      </Route> 

      <Route path="/inscricao" exact={true}>
        <Inscricao/>
      </Route>  

      <Route path="/listaviagens" exact={true}>
        <ListaDeViagens/>
        </Route> 

      <Route path="/criarviagens" exact={true}>
        <CriarViagens/>
        </Route>  

       <Route path="/editarinscricoes" exact={true}>
        <EditarInscricoes/>
         </Route> 

       <Route path="/signup" exact={true}>
        <Signup/>
         </Route>   
      
      
       

      </Switch>
    </BrowserRouter>

    
    </div>
  );
}

export default Router