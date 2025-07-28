// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();   // Remove espaços em branco

    // Validação se está vazio
    if (amigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    amigos.push(amigo); 

    // Atualiza a lista de pessoas
    let listaAmigos = document.getElementById("listaAmigos"); 
    let item = document.createElement("li");                  
    item.textContent = amigo;                                
    listaAmigos.appendChild(item);                             

    input.value = "";
}