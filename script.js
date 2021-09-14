const slider = document.querySelector(".scroll-concerts");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", () => {
    isDown = true;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
});
slider.addEventListener("mouseup", () => {
    isDown = false;
});
slider.addEventListener("mousemove", () => {
 console.log(isDown);
});