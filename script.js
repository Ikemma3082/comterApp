// console.log("hello world!!");
// alert
const count = document.querySelector(".count");
const btn = document.querySelector(".buttons");


btn.addEventListener("click", (e) => {
    if(e.target.classList.contains("add"))
    count.innerHTML++;
    setColor()
});

btn.addEventListener("click", (e) => {
    if(e.target.classList.contains("reset"))
    count.innerHTML = 0;
    setColor()
});

btn.addEventListener("click", (e) => {
    if(e.target.classList.contains("subtract"))
    count.innerHTML--;
    setColor()
});


function setColor() {
    if (count.innerHTML > 0){
        count.style.color = "#005490"
    } else if (count.innerHTML < 0){
        count.style.color = "rgb(194, 44, 69)"
    } else {
        count.style.color = "#1c2b2d"
    }
}