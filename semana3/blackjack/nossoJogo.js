/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta();
let resultado = []
let texto = []
let valor = [] 
console.log("Bem vindo ao jogo de Blackjack!")
//alert("Bem vindo ao jogo de Blackjack!")


var z = confirm("Quer começar uma nova rodada?")
if (z == true) {

   let carta = comprarCarta();
   texto.push(carta.texto)
   valor.push(carta.valor)

   console.log(texto)

}

   
  
 else {
   console.log("o jogo acabou")
   //alert("o jogo acabou")
}