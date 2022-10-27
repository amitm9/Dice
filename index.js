var randomNumber1= (Math.random()*5)+1;
randomNumber1=Math.floor(randomNumber1);

var randomNumber2= (Math.random()*5)+1;
randomNumber2=Math.floor(randomNumber2);


document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 wins";
  else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player 2 wins";
    else
      document.querySelector("h1").innerHTML="DRAW";
