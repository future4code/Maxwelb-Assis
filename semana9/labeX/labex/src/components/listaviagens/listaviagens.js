import React from "react";
import { useHistory } from "react-router-dom";



function ListaViagens () {
   const history = useHistory()


 const voltarAoLogin = () => {
    history.push("login")

 }   

return (
<div>    
LISTA DE VIAGENS <button onClick={voltarAoLogin}>retornar ao Login</button>



</div>

)


}


export default ListaViagens 