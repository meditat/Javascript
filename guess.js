//for checking the user input if it said right or wrong.
var correctGuess = false ;
//computer way to generate random number
var randomNumber = Math.floor(Math.random()*6+1);
//asking user for his guess.
var userGuess  = prompt("I am thinking the number between 1 to 6 .")


//checking if user have guessed it right.
if(parseInt(userGuess) === randomNumber){
    correctGuess = true;
  
//if the user guess is less the the random number.   
}else if(parseInt(userGuess)<randomNumber){
    //ask user to make another guess.
    var guessMore = prompt("The Number i thought is  more than "+ userGuess +" .");
    //if it guessed right this time.
    if(parseInt(guessMore) === randomNumber){
        correctGuess = true;
    }
    
//if   the user guess is more than the random number.  
}else if(parseInt(userGuess)>randomNumber){
    var guessLess  = prompt("The number i thought is less than  "+userGuess +".");
    //if the user guessed it right now
    if(parseInt(guessLess) === randomNumber){
        correctGuess = true;
    }
}

//if the user guessed it right then set the value of the correct
//guess true
if(correctGuess){
    document.write("<p>Woohhh! You Guessed It right.</p>");
//if the user could'nt make the right guess.
}else{
    document.write("<p>Sorry the number was "+randomNumber+".</p>");
    
}