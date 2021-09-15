// const slider = document.querySelector(".scroll-concerts");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener("mouseleave", () => {
//     isDown = false;
//     slider.classList.remove('active');
// });
// slider.addEventListener("mouseup", () => {
//     isDown = false;
//     slider.classList.remove('active');
// });
// slider.addEventListener("mousemove", (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     console.log({x, startX});
//     const walk = (x - startX) * 3;
//     console.log(walk);
//     slider.scrollLeft = scrollLeft - walk;
// });

let scrollConcerts=document.getElementById("tour--concerts-scroll");
let tourConcertItems=[
    {
        id:"0",
        day:"30",
        month:"Oct",
        name:"Festival Atlantikaldia",
        place:"Munich",
        description:"blabla",
    },
    {
        id:"1",
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

]
function printTourListItems(item , index){
    scrollConcerts.innerHTML  +=`
    <div><div class="tour--concert-item">
    <div class="concert--item-date">
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
     </div>   
     </div>`
    
}
    function loadConcerts(){
    scrollConcerts.innerHTML = "",
    tourConcertItems.forEach((item, index)=>printTourListItems(item, index ));
    
    }
    loadConcerts();
   