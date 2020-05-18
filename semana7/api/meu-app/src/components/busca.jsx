import React from "react";
import styled from "styled-components";
import axios from "axios";


const Caixa = styled.div`
border: 1px solid;
border-radius: 10px;
margin: 70px auto 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 450px;
height: 500px;

`;


const Selecao = styled.div`
  display: inline;
  margin: 0 auto 20px auto;
  text-align: center;

`


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
        <Selecao>
        <h2>Atividades Para a Sua Quarentena</h2>
        <label ><b>Escolha o Tipo de Atividade: </b></label>
        <select onChange={this.tipoAtividade}>
          
          <option key={" "} value=" "></option>
          <option key={"education"} value="education">Educação</option>
          <option key={"recreational"} value="recreational">Recreação</option>
          <option key={"social"} value="social">Social</option>
          <option key={"diy"} value="diy">Faça voce mesmo</option>
          <option key={"charity"} value="charity">Caridade</option>
          <option key={"cooking"} value="cooking">Cozinhar</option>
          <option key={"relaxation"} value="relaxation">Relaxamento</option>
          <option key={"musica"} value="music">Musica</option>
          <option key={"busywork"} value="busywork">Trabalho Agitado</option>
        </select><br/>

        <label htmlFor=" "><b>Numero de Participantes: </b></label>
        <select onChange={this.numeroParticipantes}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </Selecao>

        <button onClick={this.novaAtividade}>Gerar uma Atividade Aleatoria</button>
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
