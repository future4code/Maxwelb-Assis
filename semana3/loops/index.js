//EXERCICIOS DE INTERPRETAÇÃO DE CODIGO

// EXERCICIO 1

// 105


// EXERCICIO 2

a) //insere um item no final do array

b) // [ 10, 15, 25, 30 ]

c)  /* [ 12, 15, 18, 21, 27, 30 ] e [12 ] */ 


// EXERCICIOS DE ESCRITA DE CODIGO


// EXERCICIO 3

a) 

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = array[0]
let menor = array[1]

for (let elemento of array){
    if (elemento> maior){
    maior = elemento
    }
    else if (elemento<menor){
        menor = elemento
    }
}

console.log(maior)
console.log(menor) */


b) 

/* const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (let numero of array){
    novoArray.push(numero/10)
}

console.log(novoArray) */


c)

/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []

for (let numero of array){
    if (numero % 2 ===0){
        novoArray.push(numero)  
    }

}

console.log(novoArray) */


d) 

/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let novoArray = []
let contador = []

for (var numero of array){
    contador++
    novoArray.push(numero)
    console.log(`o elemento do index ${contador-1} e ${numero}`)


    }*/



