let verMas = document.querySelector(".tour--concerts-button");
let pagUno= document.getElementById("pagUno");
let pagDos= document.getElementById("pagDos");
verMas.addEventListener("click", cambiarPagina)

function ocultarPagUno(){
    pagUno.classList.remove('tour');
 
}

function mostrarPagDos(){
    pagDos.innerHTML += `
  <p class="concert--item-month">${item.month}</p>
    </div>`,
    

    pagUno.classList.add('tourDos-bloqueado');
    // pagDos.classList.add('desbloqueado');
}
console.log(pagDos)
function volverAPagUno() {
    pagDos.classList.remove('desbloqueado');
    pagUno.classList.remove('ocultar');
}

function cambiarPagina(){
    ocultarPagUno();
    mostrarPagDos();
    // loadConcertPagDos();

}
console.log(mostrarPagDos);
let concertsColumn = document.querySelector("#concerts-column");



function loadConcertsColumn(){
    pagDos.innerHTML = "",
    tourConcertItems.forEach((item, index)=>printTourListItems(item, index ));
    console.log(tourConcertItems);
}

loadConcertsColumn();
console.log(loadConcertsColumn);