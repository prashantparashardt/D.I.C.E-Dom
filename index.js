var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector("div img").setAttribute("src","images/Dice"+randomNumber1+".png");

document.querySelectorAll("div img")[1].setAttribute("src","images/Dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128525 Player1 wins";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="&#128525 Draw &#128525";
}
else{
  document.querySelector("h1").innerHTML="Player2 wins &#128525";
}
