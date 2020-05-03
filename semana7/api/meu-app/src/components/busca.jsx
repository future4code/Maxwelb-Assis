import React from "react";
import styled from "styled-components";
import axios from "axios";


const Caixa = styled.div`
border: 1px solid;
border-radius: 10px;
margin: 0 auto 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 450px;
height: 500px;
`;


class Busca extends React.Component {
  state = {
    atividade: {},
    value: {}
  }


  novaAtividade = () => {
    axios.get('https://www.boredapi.com/api/activity/').then((response) => {
      this.setState({ atividade: response.data })
    }).catch(error => {
      console.log(error.response)
    })
  }

  numeroParticipantes = (event) => {

    axios.get(`http://www.boredapi.com/api/activity?participants=${event.target.value}`).then((response) => {
      this.setState({ atividade: response.data })
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })

  }


  tipoAtividade = (event) => {
    console.log(event.target.value)
  axios.get(`http://www.boredapi.com/api/activity?type=${event.target.value}`).then((response) => {
    this.setState({ atividade: response.data })
    console.log(response)
  }).catch(error => {
    console.log(error.response)
  })

}




  render() {
    return (
      <Caixa>
        <h2>Atividades Para a Sua Quarentena</h2>
        <label ><b>Escolha o Tipo de Atividade</b></label>
        <select value={this.state.value} onChange={this.tipoAtividade}>
          <option value=" "></option>
          <option value="education">Educação</option>
          <option value="recreational">Recreação</option>
          <option value="social">Social</option>
          <option value="diy">Faça voce mesmo</option>
          <option value="charity">Caridade</option>
          <option value="cooking">Cozinhar</option>
          <option value="relaxation">Relaxamento</option>
          <option value="music">Musica</option>
          <option value="busywork">Trabalho Agitado</option>
        </select>

        <label htmlFor=""><b>Numero de Participantes</b></label>
        <select value={this.state.value} onChange={this.numeroParticipantes}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        
        <button onClick={this.novaAtividade}>Gere uma Atividade Aleatoria</button>
        <p><b>Atividade: </b> {this.state.atividade.activity}</p>
        <p><b>Acessibilidade: </b>{this.state.atividade.accessibility}</p>
        <p><b>Tipo : </b>{this.state.atividade.type}</p>
        <p><b>Participantes: </b>{this.state.atividade.participants}</p>
        <p><b>Preço: </b>{this.state.atividade.price}</p>
        <p><b>Link: </b>{this.state.atividade.link}</p>
      </Caixa>
    );
  }
}

export default Busca;
