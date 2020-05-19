import React from "react";
import { useHistory } from "react-router-dom";



function CriarViagem () {
   const history = useHistory()


 const voltarAoLogin = () => {
    history.push("login")

 }   

return (
<div>    
CRIE UMA VIAGEM <button onClick={voltarAoLogin}>retornar ao Login</button>



</div>

)


}


export default CriarViagem