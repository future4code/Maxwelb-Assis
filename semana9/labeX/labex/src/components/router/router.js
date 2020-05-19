import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom"
import styled from 'styled-components'
import HomePage from '../inicio/homepage';
import Login from '../login/login';
import ListaViagens from '../listaviagens/listaviagens';
import CriarViagem from '../criarviagem/criarviagem';
import EditarViagens from '../editarviagens/editarviagens';



function Router() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/listaviagens">
          <ListaViagens />
        </Route>
        <Route exact path="/criarviagem">
          <CriarViagem />
        </Route>
        <Route>
          <EditarViagens exact path="/editarviagens" />
        </Route>
      </Switch>
    </BrowserRouter>

      




    </div>
  );
}

export default Router