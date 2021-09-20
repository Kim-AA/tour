let scrollConcerts=document.getElementById("tour--concerts-scroll");
let tourConcertItems=[
    {
        id:"1",
        day:"03",
        month:"Oct",
        name:"Festival Atlantikaldia",
        place:"Munich",
        description:"blabla",
    },
    {
        id:"2",
        day:"03",
        month:"Nov",
        name:"Festival Atlantikaldia",
        place:"Madrid",
        description:"bloblo",
    },
    {
        id:"3",
        day:"12",
        month:"Feb",
        name:"Festival Atlantikaldia",
        place:"Tokio",
        description:"blibli",
    },

    {
        id:"4",
        day:"23",
        month:"Mar",
        name:"Festival Atlantikaldia",
        place:"Berlín",
        description:"bleble",
    }

];

function printTourListItems(item, index){
    scrollConcerts.innerHTML  +=`
    <div class="tour--concert-item">
        <div class="concert--item-date">
        <img class="concert-icon" src="img/Polygon 1.png" alt="triángulo">
            <h2 class="concert--item-day">${item.day}</h2>
            <p class="concert--item-month">${item.month}</p>
        </div>
    
        <div class="concert--item-info">
            <h4 class="item--info-name">${item.name}</h4>
            <p class="item--info-place">${item.place}</p>
            <p class="item--info-description">${item.description}</p>
        </div>
        <div class="concert--arrow-button">
        <img src="img/arrow-forward.png" alt="flecha">
        </div>
  
    </div>`
    console.log(tourConcertItems);
    
}
    function loadConcerts(){
    scrollConcerts.innerHTML = "",
    tourConcertItems.forEach((item, index)=>printTourListItems(item, index ));
    
    }
    loadConcerts();
//     function upDateConcert() {

//     concert = tourConcertItems.filter(element => element.id>0)
//         }
// //         upDateConcert();
        
// //         function totalDeItems(){
//             let concertItem = document.getElementById('loadConcertItem');
            
//                 concertItem.innerHTML = concert.length
//         }
const slider = document.querySelector(".tour--concerts-scroll");

slider.addEventListener("wheel", (event) => {
    console.log(event);
    event.preventDefault();
    slider.scrollLeft += event.deltaY;
});

// console.log(concert);


let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener("mousedown", (e) => {
isDown = true;   slider.classList.add('active');
 startX = e.pageX - slider.offsetLeft;
     scrollLeft = slider.scrollLeft;
 });
 
slider.addEventListener("mouseup", () => {
     isDown = false;
    slider.classList.remove('active');
 });
 slider.addEventListener("mousemove", (e) => {
    if(!isDown) return;
     e.preventDefault();
     const x = e.pageX - slider.offsetLeft;
    console.log({x, startX});
   const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
 });

let verMas = document.querySelector(".tour--concerts-button");
let pagUno= document.getElementById("pagUno");
let pagDos= document.getElementById("pagDos");
verMas.addEventListener("click", cambiarPagina);


function cambiarPagina(){
    ocultarPagUno();
    mostrarPagDos();
    // loadConcertPagDos();

}
    



// let verMas = document.querySelector('.tour--concerts-button');
// let concertsColumn = document.querySelector("#concerts-column");

// verMas.addEventListener("click", loadConcertsColumn);

// function loadConcertsColumn(){
//     concertsColumn.innerHTML = "",
//     tourConcertItems.forEach((item, index)=>printTourListItems(item, index ));
//     console.log(tourConcertItems);
// }

// loadConcertsColumn();
// console.log(loadConcertsColumn);

function ocultarPagUno(){
    pagUno.classList.add('ocultar');
}
function mostrarPagDos(){

    pagUno.classList.remove('tourDos_bloqueado');
    pagDos.classList.add('desbloqueado');
}
function volverAPagUno() {
    pagDos.classList.remove('desbloqueado');
    pagUno.classList.remove('ocultar');
}
