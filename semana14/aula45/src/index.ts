/*// exercicio 1

// a) usamos o comando process.argv

//b)

const valor: string = process.argv[4]
const nome: string = process.argv[2]
const idade: string = process.argv[3]


const idade2: number = Number(valor) + Number(idade) 

console.log(`Olá, ${nome}! Você tem ${idade} anos, daqui a 7 anos ${nome} tera ${idade2} anos`)
*/

// exercicio 2

const valor1: string = process.argv[2]
const valor2: string = process.argv[3]
const operacao: string = process.argv[4]


switch(operacao){
	case "soma":
		console.log(`o resultado da soma e ${Number(valor1) + Number(valor2)}`)
		break;
	case "subt":
		console.log(`o resultado da subtração e ${Number(valor1) + Number(valor2)}`)
        break;
        default:
        console.log("escolha adicao ou subtracao") 
        break;     
}
