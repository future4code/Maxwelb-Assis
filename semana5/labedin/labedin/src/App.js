import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/94/94400.png" 
          nome="Max Assis" 
          descricao="Oi, eu sou o Max, aluno da turma Julian da Labenu_"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno email="Email: max.assis@ymail.com" imagem2="https://image.flaticon.com/icons/svg/561/561127.svg " />
      </div>

      <div>
        <CardPequeno end="Rua: Vale do Silicio" imagem3="https://image.flaticon.com/icons/svg/684/684809.svg" />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Desenvolvedor Web Full Stack, Labenu_" 
        />
        
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/512/128/128783.png" 
          nome="Fiscal da Natureza" 
          descricao="Fiscalização das paisagens naturais" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
