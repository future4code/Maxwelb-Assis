import React from 'react';
import './App.css';
import Header from "./components/header.js"
import Inputs from './components/inputs';
import Cartoes from './components/cartoes';


function App() {
  return (
    <div>
      <Header/>
      <Inputs/>
      <Cartoes/>

    </div>
  );
}

export default App;
