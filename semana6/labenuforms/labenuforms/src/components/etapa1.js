import React from 'react'
import { render } from "@testing-library/react";
import styled from 'styled-components';



export function Etapa1() {
render() 
return (
    <div className="formulario">
    <h3>ETAPA 1 - DADOS GERAIS</h3>
    <p>1. Qual o seu nome?</p>
    <input></input>
    <p>2. Qual sua idade?</p>
    <input></input>
    <p>3. Qual seu email?</p>
    <input></input>
    <p>4. Qual a sua escolaridade</p>
    <select>
        <option>Ensino medio incompleto</option>
        <option>Ensino medio completo</option>
        <option>Ensino superior incompleto</option>
        <option>Ensino superiot completo</option>
    </select><br/>
    </div>
)


}

export default Etapa1