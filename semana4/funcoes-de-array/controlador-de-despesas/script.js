let array = []
let objeto = {}
var despesatotal = []
let maior = 0


function apertar1() {

    let input = document.getElementById("desp1")
    let input2 = document.getElementById("desp2")
    let input3 = document.getElementById("desp3")

    if (input.value === "" && input3.value === "") {
        alert('Digite os Valores Corretamente P**** !!!!')
    } else {

        objeto.valor = input.value
        objeto.tipo = input2.value
        objeto.descricao = input3.value

        despesatotal = Number(despesatotal) + Number(input.value)

        array += objeto
        var despesas = document.getElementById("despesasfinal")
        despesasfinal.innerHTML = despesatotal


        input.value = ""
        input2.value = ""
        input3.value = ""

    }
}

function apagar() {
    let minimo = document.getElementById("min")
    let maximo = document.getElementById("max")

    minimo.value = ""
    maximo.value = ""
}




/*function apertar2 () {
alert('teste')

let input4 = document.getElementById("det")
let input5 = document.getElementById("min")
let input6 = document.getElementById("max")

if (input5.value === "" &&  input6.value ==="") {
    alert('Digite os Valores Corretamente P**** !!!!')
}
else {
    
    console.log(array)
    




    
    } 
    }*/