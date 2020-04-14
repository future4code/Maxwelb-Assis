//NOSSO JOGO

console.log("Bem vindo ao jogo de Blackjack!")


let saques = 4
let textos = []
let valores = []


if (confirm("Quer iniciar uma nova rodada ?")) {
   true
   for (var i = 0; i < saques; i++) {
      const carta = comprarCarta()
      textos.push(carta.texto)
      valores.push(carta.valor)
      var somaJogador = (valores[0] + valores[1])
      var somaCpu = (valores[2] + valores[3])

   }
   console.log("Usuário - cartas: " + textos[0], textos[1] + " pontuação " + somaJogador)
   console.log("Computador - cartas: " + textos[2], textos[3] + " pontuação " + somaCpu)

   if (somaJogador > somaCpu) {
      console.log("Usuario Ganhou !! ")
   } else if (somaJogador < somaCpu) {
      console.log("Computador ganhou !!")
   } else {
      console.log("Empate !!")
   }
} else {
   console.log("O Jogo Acabou")
}