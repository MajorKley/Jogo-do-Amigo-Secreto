//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const lista = [];

function adicionarAmigo() {

    let inputLista = document.getElementById('amigo').value

    if (inputLista == " ") {
        alert("Por favor, insira um nome")
        return false
    }

    lista.push(inputLista);
    document.getElementById('listaAmigos').innerHTML = lista
    document.getElementById('amigo').value = " "
   
}


function processo_sorteio(amigos){
    const sorteio = Math.floor(Math.random() * amigos.length)
    return amigos[sorteio]
    
}

function sortearAmigo(){

    const resultadosorteio = processo_sorteio(lista)
    document.getElementById("resultado").innerHTML = resultadosorteio

}
