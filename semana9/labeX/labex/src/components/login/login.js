import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const irParaPaginaInicial = () => {
    history.push("/");
  }

  const criarViagem = () => {
      history.push("criarviagem")
  }

  const ListaViagens = () => {
      history.push("listaviagens")
  }

  const editarViagens = () => {
      history.push("editarviagens")
  }

  return (
    <div>
      LOGIN <button onClick={irParaPaginaInicial}>Ir para página Inicial</button>
      <button onClick={criarViagem}>Criar Viagens</button>
      <button onClick={ListaViagens}>Lista de Viagens </button>
      <button onClick={editarViagens}>Editar Viagens</button>
    </div>
  );
};

export default Login;