import React from 'react'
import styled from 'styled-components'
import axios from 'axios'



let CaixaUsuarios = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
   
`
let Dados = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

class Usuarios extends React.Component {
    state = { 
        listaDeUsuarios : []
 }

componentDidMount() {
    this.listaAtualizada()

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
            Authorization: "max"
           } 

    }  ).then((response) => {
        this.setState({listaDeUsuarios: response.data})
        console.log(this.state.listaDeUsuarios)
    }).catch(error => {
        console.log(error.response)
    })
    
}

apagarDados = (userID) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`, {
        headers: {
            Authorization: "max"
           } 

    }  ).then((response) => {
        alert("usuario deletado com sucesso")
        this.listaAtualizada()
    }).catch((error) => {
        alert("houve um erro!")
    })

}


listaAtualizada = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
            Authorization: "max"
           } 

    }  ).then((response) => {
        this.setState({listaDeUsuarios: response.data})
        console.log(this.state.listaDeUsuarios)
    }).catch(error => {
        console.log(error.response)
    })





}



    render() {
    return (
        <CaixaUsuarios>
            <h1>Lista de Usuarios</h1>
            <div>{this.state.listaDeUsuarios.map((usuario) => {
                return <Dados>
                    <span>{usuario.name}</span>
                    <button onClick={() => this.apagarDados(usuario.id)}>Apagar</button>
                </Dados>
        })} </div>  
        </CaixaUsuarios>
    )
    }
}

export default Usuarios;