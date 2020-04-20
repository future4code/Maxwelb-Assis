import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/237/200/300'}
          fotoPost={'https://i.picsum.photos/id/103/2592/1936.jpg'}
        />

        <Post 
         nomeUsuario={'Max'}
         fotoUsuario={'https://picsum.photos/50/50'}
         fotoPost={'https://i.picsum.photos/id/100/2500/1656.jpg'}
        
        />

        <Post 
         nomeUsuario={'Bananinha'}
         fotoUsuario={'https://picsum.photos/50/50'}
         fotoPost={'https://i.picsum.photos/id/1029/4887/2759.jpg'}
        
        />
      </div>
    );
  }
}

export default App;
