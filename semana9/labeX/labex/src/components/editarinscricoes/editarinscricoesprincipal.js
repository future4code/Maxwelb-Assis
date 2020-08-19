import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core'
import styled from 'styled-components'


function EditarIncricoesPrincipal () {
    const history = useHistory()

    useEffect(() => {
       
        const token = localStorage.getItem("token");
    
        if (token === null) {
          history.push("/login");
        }
      }, [history]);


    return(
        <div>
            EDITAR INSCIÇOES




        </div>


    )




}

export default EditarIncricoesPrincipal