// exercicio 1
// a) usamos o comando process.argv
//b)
var valor = process.argv[4];
var nome = process.argv[2];
var idade = process.argv[3];
var idade2 = Number(valor) + Number(idade);
console.log("Ol\u00E1, " + nome + "! Voc\u00EA tem " + idade + " anos, daqui a 7 anos " + nome + " tera " + idade2 + " anos");
