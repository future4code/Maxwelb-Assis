import React from 'react'
import './CardPequeno.css'


export function CardPequeno(props) {
return (
    <div class="peq">
<img src={ props.imagem2 } />
<img src={ props.imagem3} />
{props.email}
{props.end}


</div>
)
}

export default CardPequeno;