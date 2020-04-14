let objeto = {}
let array = []

function apertar() {

    let aut = document.getElementById('autor')
    let title = document.getElementById('titulo')
    let content = document.getElementById('conteudo')

    let postatitulo = document.getElementById("posttitulo")
    let postaautor = document.getElementById("postautor")
    let postaconteudo = document.getElementById('postconteudo')

    objeto.autor = aut.value
    objeto.titulo = title.value
    objeto.conteudo = content.value


    array.push(objeto)

    postautor.innerHTML += aut.value
    postatitulo.innerHTML += title.value
    postaconteudo.innerHTML += content.value

    aut.value = ""
    title.value = ""
    content.value = ""

}

console.log(array)