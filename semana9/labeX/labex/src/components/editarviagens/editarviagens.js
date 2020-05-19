import React from "react";
import { useHistory } from "react-router-dom";


function EditarViagens () {

const history = useHistory()

const retorneLogin = () => {
    history.push("login")
}




return(
    <div>
EDITE UMA VIAGEM <button onClick={retorneLogin}>retorne para o login</button>

</div>

)

}

export default EditarViagens 