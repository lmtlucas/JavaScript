let usuarios = ["Lucas", "ana", "maria"];
usuarios.pop(); // remove ultimo elemento
usuarios.shift(); // remove o primeiro elemento
usuarios.push("Eduardo"); // insere elemnto no final da lista
usuarios.unshift("pedro"); //insere elemento no inicio

let lista = document.getElementById("lista"); //cria variavel armazenando o elemneto id html que será alterado/manipulado

lista.innerHTML = `` //limpando a lista

usuarios.forEach(function (nome) { // percorre elementos da lista retornando cada elemento(nome)
    //lista.innerHTML += `<li>${nome} </li>`;// insere html a cada iteração , usando o incremento += para adicionar cada elemento
    //modo mais seguro:
    let itemLista = document.createElement("li"); //criação de um novo elemento
    //itemLista.style.backgroundColor = "red";
    //itemLista.style.fontWeight = "bold";
    itemLista.classList.add("cartao-destaque"); // adiciona a classe cartao destaque 
    itemLista.textContent = nome; // inserção da variavel referente aos elementos da lista
    lista.appendChild(itemLista); // inserção do html criado na posição do id lista
});

let conteiner = document.getElementById("conteiner");
let itemRemover = document.getElementById("remove");

conteiner.removeChild(itemRemover);

let listaTarefas = document.getElementById("lista-tarefas");
let novoItemTarefa = document.getElementById("item-tarefa");

function adicionarItem() {
    console.log("entrei"); //verificando se o botao executa a função
    if (novoItemTarefa.value !== "") { //validando se o valor do input esta vazio
    let itemTarefas = document.createElement("li"); // cria o elemento lista
    itemTarefas.textContent = novoItemTarefa.value; //insere o valor do input no elemento criado
    listaTarefas.appendChild(itemTarefas); // insere o elemento no html
    novoItemTarefa.value = ""; // limpa o input
      }

} 
