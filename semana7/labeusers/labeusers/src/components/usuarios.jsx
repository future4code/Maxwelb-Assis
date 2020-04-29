import React from 'react'
import styled from 'styled-components'



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
        listaDeUsuarios : [{
        id: "65418646153",
        name: "bananinha"
    },
    {
        id: "46146146416",
        name: "joaozinho"
    }]
 }



    render() {
    return (
        <CaixaUsuarios>
            <h1>Lista de Usuarios</h1>
            <div>{this.state.listaDeUsuarios.map((usuario) => {
                return <Dados>
                    <span>{usuario.name}</span>
                    <button>Apagar</button>
                </Dados>
        })} </div>  
        </CaixaUsuarios>
    )
    }
}

export default Usuarios;