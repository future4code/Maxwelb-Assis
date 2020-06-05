import React, {useState} from 'react'
import axios from 'axios'
import {Botao} from './botao'
import {Botao2} from './botao'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const Inputi = styled.input`
 width: 300px;
 margin-right: 5px;

`
const Selecti = styled.select`
    margin-right: 5px;
`
const Button2 = styled(Botao2)`
    display: flex;
    align-self: flex-end
`


const Inputs = () => {
   const [input, setInput] = useState("")
    const [selecte, setSelecte] = useState("")

const pegaInput = (event) => {
    setInput(event.target.value.value)
    }

const pegaSelect = (event) => {
    setSelecte("teste")     
    }


   const adicionar = () => {
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-max', {
        body: {
            text: input,
            day: selecte
           }}).then((response) => {
        console.log(response)
    }).catch(error => {
        console.log(error.response)
    })

    } 

    return(
    <div>
    <Container>
    <Inputi placeholder="Digite uma Tarefa" onChange={pegaInput} value={input}></Inputi>
    <Selecti value={selecte} onChange={pegaSelect}>
        <option value="segunda">segunda-feira</option> 
        <option value="terca">terça-feira</option> 
        <option value="quarta">quarta-feira</option> 
        <option value="quinta">quinta-feira</option> 
        <option value="sexta">sexta-feira</option> 
        <option value="sabado">sabado</option> 
        <option value="domingo">domingo</option>  
    </Selecti>  
    <Botao onClick={adicionar}/>
    <Button2/>
    </Container>
    <hr/>
    </div>
    )
}


export default Inputs