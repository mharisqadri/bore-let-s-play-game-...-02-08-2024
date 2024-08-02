// initial variables

let timer = 16;
let hitVal = 0;
let score=0;


// Print bubble 

function makeBubble(){
    let clutter = "";
for (let i=1;i<=102;i++){
    rn= Math.floor(Math.random()*10)
clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelectorAll(".panel-bottom")[0].innerHTML = clutter;
}


// Set Timer

function runTimer(){
    let timeInv = setInterval(function(){
if(timer>0){
timer--
document.querySelectorAll(".timer-el")[0].innerHTML=timer;
}
else{
    clearInterval(timeInv);
    document.querySelectorAll(".panel-bottom")[0].innerHTML=`<h1>Game Over</h1>`;
}
    },1000);
}


// setting up hit values

function hitValue(){
  hitVal = Math.floor(Math.random()*10);
    document.querySelectorAll(".hit-val")[0].innerHTML=hitVal;
}


// setting up scoring

function incScore(){
    score += 10;
document.querySelectorAll(".score-el")[0].innerHTML=score;
}


// matching value of hit and bubble functionality

document.querySelectorAll(".panel-bottom")[0].addEventListener("click", function(details){
let clickedNum=Number(details.target.innerHTML);
if(clickedNum===hitVal){
    timer=16;
incScore();
makeBubble();
hitValue();
}
else{
    score += -10;
    document.querySelectorAll(".score-el")[0].innerHTML=score;
}
})


// calling functions

hitValue();
runTimer();
makeBubble();