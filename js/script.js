const burguer = document.querySelector(".burguer");
const lista = document.querySelector(".lista");

function visualizarLista(){
    const lista = document.querySelector(".lista");
    const listaLi = document.querySelectorAll(".lista__li");
    console.log(lista__li)
    lista.classList.toggle("lista--activada");
    burguer.classList.toggle("toggle");

    listaLi.forEach((li, index)=> li.style.transition = `all ${0.3*index +0.6}s` );
}
burguer,addEventListener("click",visualizarLista);
