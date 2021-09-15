const slider = document.querySelector(".scroll-concerts");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove('active');
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
    const walk = (x - startX) * 3;
    console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});

// let listConcerts=document.getElementById("concerts");
// let concertItems=[
//     {
//         id:"0",
//         day:"",
//         month:"",
//         place:"",
//         description:"",
//     },
//     {
//         id:"",
//         day:"",
//         month:"",
//         place:"",
//         description:"",
//     },
//     {
//         id:"",
//         day:"",
//         month:"",
//         place:"",
//         description:"",
//     },
//     {
//         id:"",
//         day:"",
//         month:"",
//         place:"",
//         description:"",
//     }

// ]
// listConcerts.innerHTML += `<div class="scroll-concerts">
                
// <div class="concert-item">
//     <div class="date">
//         <h2 class="day">${elemento.day}</h2>
//         <p class="month">${elemento.month}</p>
//     </div>
    
//     <div class="info-concert">
//         <h4 class="name">${elemento.name}</h4>
//         <p class="place">${elemento.place}</p>
//         <p class="description">${elemento.description}</p>
//     </div>`
//     function loadConcerts(){
//         elementosMenu.innerHTML = ""
//     Menu.forEach((elemento, index)=>printList(elemento, index, elementosMenu ));
//     upDateConerts();
//     }
//     console.log(listConcerts);