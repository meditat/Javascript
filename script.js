var correctGuess = false ;
var chances = 1;
var randomNumber = Math.floor(Math.random()*6+1);
var userGuess  = prompt("I am thinking the number between 1 to 6 .")

if(parseInt(userGuess) === randomNumber){
    correctGuess = true;
}else if(parseInt(userGuess)<randomNumber){
    var guessMore = prompt("The Number i thought is  more than "+ userGuess +" .");
    if(parseInt(guessMore) === randomNumber){
        correctGuess = true;
    }
}else if(parseInt(userGuess)>randomNumber){
    var guessLess  = prompt("The number i thought is less than  "+userGuess +".");
    if(parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
}

        
if(correctGuess){
    document.write("<p>Woohhh! You Guessed It right.</p>");
}else{
    document.write("<p>Sorry the number was "+randomNumber+".</p>");
    chances=chances-1;
}