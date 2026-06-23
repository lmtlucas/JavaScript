// Exemplo de uma requisição GET padrão

let divPersonagem = document.getElementById("personagens")

fetch("https://rickandmortyapi.com/api/character")
  .then(function(resposta) {
    return resposta.json(); // Converte a resposta em texto para Objeto JS
  })
  .then(function(dados) {
    console.log("Dados encontrados:", dados);

    const personagens = dados.results;

        personagens.forEach(item => {
            let paragrafo = document.createElement("p"); // cria o elemento paragrafo
            paragrafo.textContent = item.name; //insere o valor name de cada item no elemento paragrafo criado
            divPersonagem.appendChild(paragrafo); // insere o elemento no html
            let foto = document.createElement("img"); // cria o elemento paragrafo
            foto.src = item.image; //insere o valor name de cada item no elemento paragrafo criado
            divPersonagem.appendChild(foto); // insere o elemento no html
      
    });

  })
  .catch(function(erro) {
    console.error("Falha na comunicação:", erro);
  });
