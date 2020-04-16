import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state ={
    pessoas: [{
        
          nomeUsuario: 'paulinha',
          fotoUsuario:'https://picsum.photos/id/237/200/300',
          fotoPost: 'https://i.picsum.photos/id/103/2592/1936.jpg'
  },

        {
         nomeUsuario: 'Max',
         fotoUsuario: 'https://picsum.photos/50/50',
         fotoPost:'https://i.picsum.photos/id/100/2500/1656.jpg'
        },
        { 
         nomeUsuario:'Bananinha',
         fotoUsuario:'https://picsum.photos/50/50',
         fotoPost:'https://i.picsum.photos/id/1029/4887/2759.jpg'        
  }
  ]
}
}  




  render() 
    const componentes = this.state.pessoas.map((pessoas) => {
      return 
        <p>
          {pessoa.nomeUsuario} - {pessoa.fotoUsuario} - {pessoa.fotoPost}
        </p>
    )
     
    
    return (
    <div>
      <h1>Exemplo 5</h1>
      {/* Como sempre, colocamos a variável com a lista de componentes
      gerados aqui. */}
      <div>{listaDeComponentes}</div>
    </div>
    )
  