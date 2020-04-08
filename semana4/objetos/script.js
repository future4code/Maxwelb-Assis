let objeto = {}
let array = []

function apertar() {

let aut = document.getElementById('autor')
let title = document.getElementById('titulo')
let content = document.getElementById('conteudo')

let postaTitulo = document.getElementById("posttitulo")
let postaautor = document.getElementById("postautor")
let postaConteudo = document.getElementById('postconteudo')

objeto.autor = aut.value
objeto.titulo = title.value
objeto.conteudo = content.value


array.push(objeto)

aut.value = ""
title.value = ""
content.value = ""

console.log(postaTitulo)

}

console.log(array)
