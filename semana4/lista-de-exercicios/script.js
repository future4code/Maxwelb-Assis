AULA 14

Exercícios de leitura de código


1) /*o programa e um conversor de dollar para real, ele tem uma função que chamada conversordemoeda(),
que recebe 100 de parametro e multiplica pela cotação no retorno e imprime em seguida

2) /*e uma função que calcula o rendimento conforme a aplicaçao financeira escolhida, a função possui um switch case,
com cada uma das aplicação, e o valor de suas repctivas cotaçoes, dependendo a opçao do usuario e aplicado a cotaçao
da aplicaçao financeira escolhida, caso seja escolhida uma aplicação que nao esyeja na lista sera 
aplicado o valor default*/

3) /*o programa possui 3 arrays de numeros o primeiro com varios numeros e os outros 2 vazios, em seguida tem um FOR ,
que casoo numero seja par, inclui o numero no array1 e caso seja impar incluit o numero no array2, e no final imprime 
no console usando o length a quantidade de numeros que cada um dos 3 arrays possue */

4) /*o programa possui um array com diversos numeros, em seguida possui um for of que passa por cada um dos numeros 
do array e um IF onde os numeros que forem nemor que Infinity sao colocados na variavel numero1 e os numeros forem maiores
que o array numero2 seram adicionados na variavel numero2, e no fim sera impressos os valores infinity e 283 */


Exercícios de lógica de programação


1)
    a) //false
    b) //false
    c) //true
    d) // true
    e) // true


2) //faltou indicar o array de numeros e um if para verificar se os numeros sao pares 


/*let numeros = [1,2,3,4,5]
const quantidadeDeNumerosPares = []
let i = 0

  for(numero of numeros)  {
    if(numero %2 ===0){
      quantidadeDeNumerosPares.push(numero)
    }
        
    
  console.log(quantidadeDeNumerosPares)
}*/


3) /* function triangulo(a, b, c) {
    if(a === b && b===c && a===c){
      
      console.log("o triangulo e equilatero")
    }
    else if (a !== b && b !== c && a !== c){
      
      console.log("o triangulo e escaleno")
    }
    else{
      console.log("o triangulo e isosceles")
    }
  }
  
  triangulo(2,6,6)*/


4) /* 
function numeros(a, b) {
  if(a>b){
    console.log(`o maior e ${a}`)
  }
  else {
    console.log(`o maior e ${b}`)
  }
  if  (a % b === 0) {
    console.log(`${a} e divisivel por ${b}`)
  }
  else  {
    console.log(`${a} nao e divisivel por ${b}`)
  }
  if (b % a === 0){
    console.log(`${b} e divisivel por ${a}`)
  }
  else {
    console.log(`${b} nao e divisivel por ${a}`)
  }
  if (a > b){
    console.log(`${a} e maior que ${b}`)
  }
    else {
    console.log(`${b} e maior que ${a}`)
  
  }

}
numeros(5,2) */



AULA 15


EXERCICICOS DE FUNÇOES

1) /*let array = []


function numeros(a,b,c,d,) {
    array.push(a,b,c,d)
    array.sort()
    console.log(`o segundo maior numero e ${array[2]} e o segundo menor e ${array[1]}`)
   


    }

resultado = numeros(5,2,3,6) */


2)
/* max = () =>{console.log("Labenu_")}
max()*/


EXERCICIOS DE OBJETO


1) /* arrays sao conjuntos de dados, podem receber numeros, strings e funçoes, o objeto tambem e um conjunto de
dados, porem e organizado em propriedades e valores da seguinte forma {propriedade: valor } */


2) /*
let obj = {}

function triangulo (lado1, lado2) {
    obj.largura = lado1
    obj.altura = lado2
    obj.perimetro = 2 * (lado1 + lado2)
    obj.area = lado1 * lado2
    console.log(obj)






}



triangulo(15, 25)*/




