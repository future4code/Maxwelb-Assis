 function apertarBotao() {

     let but = document.getElementById("entrada")
     let segunda = document.getElementById("segunda")
     let sele = document.getElementById("seletor")

    if(sele.value == "segunda"){
        segunda.innerHTML += but.value
    }
    else if (sele.value == "terca")  {
        terca.innerHTML += but.value

    }
    else if (sele.value == "quarta")  {
        quarta.innerHTML += but.value}

    else if (sele.value == "quinta")  {
        quinta.innerHTML += but.value}

    else if (sele.value == "sexta")  {
        sexta.innerHTML += but.value} 
     
     
    else if (sele.value == "sabado")  {
        sabado.innerHTML += but.value}

    else {
        domingo.innerHTML += but.value 
    }
    
    but.value = ""
     
 
        
 }