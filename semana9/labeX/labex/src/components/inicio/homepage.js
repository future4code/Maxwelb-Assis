import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const irParaLogin = () => {
    history.push("login");
  };

  return (
    <div>
      INICIO <button onClick={irParaLogin}>Ir para página de Login</button>
    </div>
  );
};

export default HomePage;