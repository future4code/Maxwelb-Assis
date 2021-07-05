import React from 'react';
import { Button } from 'reactstrap';



export const Botao = (props) => {
    return (
        <div>
          <Button  onClick={props.onClick} color="info">adicionar</Button>{' '}
        </div>
      );
    }

export const Botao2 = (props) => {
  return (
      <div>
        <Button color="danger">apagar concluidas</Button>
      </div>
    );
  }    
