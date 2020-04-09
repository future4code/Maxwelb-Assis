let array = []
let objeto = {} 

function apertar1() {
   alert("test")
   
    let input = document.getElementById("desp1")
    let input2 = document.getElementById("desp2").value
    let input3 = document.getElementById("desp3")

    if (input.value === "" &&  input3.value ==="") {
        alert('Digite os Valores Corretamente P**** !!!!')
    }
    else {

    objeto.valor = input.value
    objeto.tipo = input2
    objeto.descricao = input3.value

    console.log(objeto)

    array += objeto

    console.log(array)

    input.value = ""
    input2.value = ""
    input3.value =  ""
    }
}


/*function apertar2 () {

    let input4 = document.getElementById("det").value
    let input5 = document.getElementById("min").value
    let input6 = document.getElementById("max").value

    if (input5.value === "" &&  input6.value ==="") {
        alert('Digite os Valores Corretamente P**** !!!!')
    }
    else {






    }
}*/