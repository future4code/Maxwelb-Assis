EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

EXERCICIO 1

A) // []

B) // [ 0, 1, 0, 1, 2, 3 ]

C) // [ 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]


EXERCICIO 2

A) // 0, 2 e undefined

B) // retorna a posição do array caso os numeros sejam iguais, se forem diferentes retorna undefined


EXERCICIO 3

/* a função recebe um array e cria 2 variaveis onde o resultadoA soma todos os items do array e o resultadoB 
multiplica todo os items do array e coloca os resultados dentro de um novo array chamado arrayFinal */


EXERCICIOS DE ESCRITA DE CODIGO


EXERCICIO 4


A) /* let cachorro =  (idade) => {
    return idade*7

}

let resultado = cachorro(5)
console.log(resultado) */


B) /* 
let resultado = " "
let array = []   
let usuario = " "


 let minhaFuncao = (dados) => {
    usuario = dados 
    if (usuario[3] === true){
        resultado = "sou" }
        else {
        resultado = "não sou"}
    } 

    let resultadoFinal = minhaFuncao(["Ricardo", 25, "Rua Paulista", true])
    console.log(`Eu sou ${usuario[0]}, tenho ${usuario[1]} anos, moro em ${usuario[2]} e ${resultado} estudante`)
   
*/


EXERCICIO 5


/* let usuario = " "

   const conversor = (numero) =>{
        usuario = numero
        let letras = ["M",  "CM",  "D",  "CD", "C",  "XC", "L",  "XL",  "X",  "IX", "V",  "IV", "I"];
        let numeros = [1000,  900,  500,  400,  100,   90,  50,   40,   10,    9,    5,    4,    1]
        let convertido=""
        let i=0;
        while(numero > 0){
            if(numero>=numeros[i]){
                convertido+=letras[i]
                numero-=numeros[i]
            }
            else{
                i++;
            }
        }
        return convertido;

    }
    
let resultado = conversor(2005)
console.log(`O ano ${usuario} pertence ao século ${resultado}`) */



EXERCICIO 6

A) /* const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function calculo (numeros) {
    return numeros.length

}

let resultado = calculo(array)
console.log(resultado) */


B) /*
function calculo (numeros) {
    if (numeros % 2 ===0) {
       return numeros % 2 ===0
    }
    else {
        return numeros % 2 == 0
    }
     

}

let resultado = calculo(24)
console.log(resultado) */


C) /*
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let pares = []
let impares = []


function calculo (numeros) {
    for (numero of numeros){
    
    if (numero % 2 ===0) {
        pares.push(numero)
       
    }
    else {
        impares.push(numero)
    }
     

}
}

let resultado = calculo(array)
console.log(pares)
*/


D) 
/* 
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
let pares = []
let impares = []


function calculo (numeros) {
    for (numero of numeros){
        if (numero % 2 ===0) {
            pares.push(numero)}
        
        else {
            impares.push(numero)}
}
}

let resultado = calculo(array)
console.log(pares) */













    
 

 