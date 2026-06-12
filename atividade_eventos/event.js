const botao = document.getElementById("btn");
const quadro = document.getElementById("quadro");

function reagirAoClique(){
    quadro.style.backgroundColor = "red";
}

botao.addEventListener("click", reagirAoClique);


// movimentando o quadrado
let x = 0
let y = 0
document.addEventListener("keydown", function(e){
    console.log(e.key);
switch (e.key) {
    case "ArrowRight":
        x += 30
         quadro.style.left = x + "px";
        break;
    case "ArrowDown":
        y += 30;
        quadro.style.top = y + "px";
        break;
    case "ArrowUp":
        y -= 30;
        quadro.style.top = y + "px";
        break;
    case "ArrowLeft":
        x -= 30;
        quadro.style.left = x + "px";
        break;

    default:
        break;
}
});


// dark mode
const botaoDark = document.getElementById("btn-dark");
const body =document.querySelector("body");

function mudarThema(){
    body.classList.toggle("dark-theme");
}

botaoDark.addEventListener("click", mudarThema);

//contador de clicks

let contador = 0
const numero = document.querySelector("b");

botaoDark.addEventListener("click", function (e) {
    console.log(e);
    contador ++;
    numero.textContent = contador;
    
})


