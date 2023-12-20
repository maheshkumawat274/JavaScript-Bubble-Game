function BubbleHit(){
 clutter = ""
 for(var i=1; i<86; i++){
  var RandomNum = Math.floor(Math.random()*10)
  clutter += `<div class="bbl">${RandomNum}</div>`
   document.querySelector(".penalbtm").innerHTML = clutter;
 }
}

var timer = 59;
function TimerSet(){
  var clear = setInterval(function(){
    if(timer>0){
      timer--;
    document.getElementsByClassName("box")[1].innerHTML = timer
    }else{
      clearInterval(clear);
      document.querySelector(".penalbtm").innerHTML =  `<h1>Game Over !<h1/>`
    }
  },1000)
}

var num = 0;
function HitSet(){
  num = Math.floor(Math.random()*10);
  document.getElementsByClassName("box")[0].innerHTML = num
}

var score = 0;
function Score(){
  score+=10
  document.getElementsByClassName("box")[2].innerHTML = score
}

function Bubbleclick(){
  document.querySelector(".penalbtm").
  addEventListener("click",function(dets){
    var data = (Number(dets.target.textContent));
    if(data === num){
      Score()
      BubbleHit()
      HitSet()
    }
  })
}

BubbleHit()
TimerSet()
HitSet()
Score()
Bubbleclick()