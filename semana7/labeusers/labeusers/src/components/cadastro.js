import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
 

const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 auto;
    width: 400px;
    height: 300px;
`;


let adicionarUsuario = () => {
    const body = {
        name: "nomeUsuario",
        email: "emailUsuario"
    }
    
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
        headers: {
            authorization: "max"
           } 
    }).then((resposta) => {
        alert("usuario adicionado")
    }).catch((erro) => {
        alert("deu Ruim !!!!")
    })

}




class Cadastro extends React.Component {
    state = {
        nomeUsuario: "",
        emailUsuario: ""    
    }

    InputNome = (event) => {
        this.setState({nomeUsuario: event.target.value})
         } 
           
    InputEmail = (event) => {
        this.setState({emailUsuario: event.target.value})
             } 

    adicionarUsuario = () => {
        console.log(this.state.nomeUsuario)
        console.log(this.state.emailUsuario)

        this.setState({nomeUsuario: " ", emailUsuario: " "})

    }           



   
render() {
return (

<Caixa>

<label>Nome</label>
<input onChange = {this.InputNome} value={this.state.nomeUsuario}/>
<label>Email</label>
<input onChange = {this.InputEmail} value={this.state.emailUsuario}/>
<button onClick = {this.adicionarUsuario}>Salvar</button><br/><br/>


</Caixa>


)

}
}

export default Cadastro;