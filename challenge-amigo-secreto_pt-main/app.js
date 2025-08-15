const lista = [];

function adicionarAmigo() {
    let inputLista = document.getElementById('amigo').value;

    if (inputLista.trim() === "") { // Verifica se está vazio (melhor que " ")
        alert("Por favor, insira um nome");
        return false;
    }

    lista.push(inputLista);
    atualizarListaAmigos(); // Chama a função que atualiza a lista em <li>
    document.getElementById('amigo').value = ""; // Limpa o campo
}

function atualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpa a lista antes de recriar

    // Percorre o array e adiciona cada nome como <li>
    for (let i = 0; i < lista.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = lista[i];
        listaHTML.appendChild(itemLista);
    }
}

// Funções de sorteio (mantidas como no seu código original)
function processo_sorteio(amigos) {
    const sorteio = Math.floor(Math.random() * amigos.length);
    return amigos[sorteio];
}

function sortearAmigo() {
    const resultadosorteio = processo_sorteio(lista);
    document.getElementById("resultado").innerHTML = resultadosorteio;
}