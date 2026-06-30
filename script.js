// =========================
// SF Records V5
// =========================

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.style.opacity="0";

loader.style.visibility="hidden";

},1800);

});

// Parallax

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*12;
const y=(e.clientY/window.innerHeight-.5)*12;

hero.style.transform=
`translate(${x}px,${y}px)`;

});

// Intro

const intro=new Audio("intro.mp3");

intro.volume=.6;

document.addEventListener("click",()=>{

intro.play().catch(()=>{});

},{once:true});

// Click

const click=new Audio("click.mp3");

click.volume=.35;

document.querySelectorAll("button,a").forEach(el=>{

el.addEventListener("click",()=>{

click.currentTime=0;

click.play().catch(()=>{});

});

});// =========================
// Music Toggle
// =========================

const music = document.getElementById("music");
const toggle = document.getElementById("music-toggle");

if (music && toggle) {

    music.volume = 0.35;

    let playing = false;

    toggle.addEventListener("click", () => {

        if (playing) {

            music.pause();
            music.currentTime = 0;
            toggle.classList.remove("active");

        } else {

            music.play().catch(()=>{});
            toggle.classList.add("active");

        }

        playing = !playing;

    });

}

// =========================
// Canvas Particles
// =========================

const canvas = document.createElement("canvas");

document.body.prepend(canvas);

canvas.style.position = "fixed";
canvas.style.inset = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.pointerEvents = "none";
canvas.style.zIndex = "-1";

const ctx = canvas.getContext("2d");

function resizeCanvas(){

canvas.width = innerWidth;
canvas.height = innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const particles = [];

for(let i=0;i<120;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2+1,

dx:(Math.random()-.5)*0.35,

dy:(Math.random()-.5)*0.35

});

}// =========================
// Animate Particles
// =========================

function animateParticles(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

p.x += p.dx;
p.y += p.dy;

if(p.x<0 || p.x>canvas.width) p.dx*=-1;
if(p.y<0 || p.y>canvas.height) p.dy*=-1;

ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fillStyle="rgba(255,40,40,.8)";
ctx.fill();

});

requestAnimationFrame(animateParticles);

}

animateParticles();


// =========================
// Reveal Animation
// =========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:900,
fill:"forwards",
easing:"ease"

});

observer.unobserve(entry.target);

}

});

});

document.querySelectorAll("section,footer").forEach(el=>{

observer.observe(el);

});


// =========================
// Navbar Blur
// =========================

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

navbar.style.background="rgba(0,0,0,.75)";
navbar.style.backdropFilter="blur(18px)";
navbar.style.borderBottom="1px solid rgba(255,0,0,.2)";

}else{

navbar.style.background="rgba(0,0,0,.35)";
navbar.style.borderBottom="1px solid rgba(255,0,0,.12)";

}

});


// =========================
// Smooth Hover
// =========================

document.querySelectorAll(".button,button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(1.05)"}

],{

duration:200,
fill:"forwards"

});

});

btn.addEventListener("mouseleave",()=>{

btn.animate([

{transform:"scale(1.05)"},

{transform:"scale(1)"}

],{

duration:200,
fill:"forwards"

});

});

});

console.log("🔥 SF Records V5 Loaded");
