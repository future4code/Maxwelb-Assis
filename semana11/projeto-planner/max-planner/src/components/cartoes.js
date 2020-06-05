import React, {useEffect, useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {
  Card, CardTitle, CardText, CardDeck,
  CardBody, Col
} from 'reactstrap';

const Cardi = styled(Card)`
min-width: 110px;
margin-top: 15px;


`
const Deck = styled(CardDeck)`
margin-left: auto;
margin-right: auto;

`

const Cartoes = (props) => {
    const [tarefas, setTarefas] = useState("")

  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-max').then((response) => {
     /* console.log(response) */
      setTarefas(response.data)
  }).catch(error => {
      console.log(error.response)
  })
  },[]) 

  
  const segunda = tarefas.m((tarefa) =>{
    return tarefa.day === "segunda"
  })

  console.log(segunda)

  return (
    <Deck className="container" >
       <Col sm="4">         
      <Cardi body outline color="secondary">
        <CardBody>
          <CardTitle><b>Segunda-feira</b></CardTitle>
          <CardText>anotação</CardText>
        </CardBody>
      </Cardi>
      </Col>
      <Col sm="4"> 
      <Cardi body outline color="primary">
        <CardBody>
          <CardTitle><b>Terça-feira</b></CardTitle>
          <CardText>anotação</CardText>
        </CardBody>
      </Cardi>
      </Col>
      <Col sm="4">  
      <Cardi body outline color="success">
        <CardBody>
          <CardTitle><b>Quarta-feira</b></CardTitle>
          <CardText>anotação</CardText>
        </CardBody>
      </Cardi>
      </Col>
      <Col sm="4">  
      <Cardi body outline color="info">
        <CardBody>
          <CardTitle><b>Quinta-feira</b></CardTitle>
          <CardText>anotação e48394u398uriojfkmfdsmfkmfksjfsfd98dusf0suf98djfskdlflfl</CardText>
        </CardBody>
      </Cardi >
      </Col>
      <Col sm="4">  
      <Cardi body outline color="warning">
        <CardBody>
          <CardTitle><b>Sexta-feira</b></CardTitle>
          <CardText>anotação</CardText>
        </CardBody>
      </Cardi>
      </Col>
      <Col sm="4">  
      <Cardi  body outline color="danger">
        <CardBody>
          <CardTitle><b>Sabado</b></CardTitle>
          <CardText>anotação ndskjnfdksfnkdsn csnfndfslfdsjnfcsjknfcjkndkcjdnfjksncjdksn</CardText>
        </CardBody>
      </Cardi>
      </Col>
      <Col sm="4">  
      <Cardi body outline color="secondary">
        <CardBody>
          <CardTitle><b>Domingo</b></CardTitle>
          <CardText>anotação</CardText>
        </CardBody>
      </Cardi>
      </Col>
    </Deck>
  );
};

export default Cartoes