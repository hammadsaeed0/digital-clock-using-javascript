setInterval(() => {
const time = document.querySelector(".number");
const apmp = document.querySelector(".ampm");
let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let dayNight = "AM";
if(hours > 12){
    hours = hours - 12;
    let dayNight = "PM";
}
time.textContent = `${hours} :${min} :${sec}`;
apmp.textContent = `${dayNight}`;
}, 1000);

