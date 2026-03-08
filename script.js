// typing animation
const text = "Welcome To THE 3 Philosophers 🚀";
let i = 0;

function typing(){
const el = document.getElementById("typing");

if(el && i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(typing,80);
}
}

typing();

// enter button
const enterBtn = document.getElementById("enterBtn");

if(enterBtn){
enterBtn.addEventListener("click",function(){
document.body.style.opacity="0";

setTimeout(()=>{
window.location.href="home.html";
},500);
});
}

// star animation
const canvas = document.getElementById("stars");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];

for(let i=0;i<150;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*2,
speed:Math.random()*1
});
}

function animateStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(star=>{

ctx.fillStyle="white";
ctx.fillRect(star.x,star.y,star.size,star.size);

star.y += star.speed;

if(star.y > canvas.height){
star.y=0;
star.x=Math.random()*canvas.width;
}

});

requestAnimationFrame(animateStars);

}

animateStars();

}