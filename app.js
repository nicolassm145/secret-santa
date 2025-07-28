
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

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteia uma pessoa 
    let i = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[i];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nomeSorteado} foi sorteado!</li>`;

    // Remove a lista de nomes
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";   
}