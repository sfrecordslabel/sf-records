document.addEventListener("DOMContentLoaded", () => {

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-0.5)*20;
const y=(e.clientY/window.innerHeight-0.5)*20;

hero.style.transform=`translate(${x}px,${y}px)`;

});

const title=document.querySelector("h1");

setInterval(()=>{

title.style.textShadow=`0 0 ${20+Math.random()*40}px red`;

},300);

});
