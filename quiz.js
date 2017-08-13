//quiz start . NO answrer are corect.
var correct  = 0;

//ask quesitions.
var answer1= prompt("which  progamming langueage has the name of a gem?")
if(answer1.toLowerCase()==='ruby'){
    correct+=1;
}

var answer1= prompt("which  progamming langueage has the name of a gem?")
if(answer1.toLowerCase()==='ruby'){
    correct+=1;
}

var answer1= prompt("which  progamming langueage has the name of a gem?")
if(answer1.toLowerCase()==='ruby'){
    correct+=1;
}

var answer1= prompt("which  progamming langueage has the name of a gem?")
if(answer1.toLowerCase()==='ruby'){
    correct+=1;
}

var answer1= prompt("which  progamming langueage has the name of a gem?")
if(answer1.toLowerCase()==='ruby'){
    correct+=1;
}

//checking the correct answers.
if(correct ===5){
    alert("Congratulation! You got a Gold." );
}else if(correct===4){
    alert("Congratulation! You got a Silver .");
}else if(correct===3){
    alert("Congratulation! You got a Bronze .");
}else{
    alert("Sorry you didn't pass the exam.")
}