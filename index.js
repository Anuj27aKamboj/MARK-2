var readlineSync = require("readline-sync");

console.log("WELCOME!!!");
console.log("Let's Play the Quiz on VIRAT KOHLI");

var score = 0;

var questions = [
  {
    question : "Date of Birth of Virat Kholi? ",
    answer : "5 November"
  },
  
  {
    question : "Wife of Virat Kholi? ",
    answer : "Anushka Sharma"
  },
  
  {
    question : "What is the present age of Virat Kohli? ",
    answer : "33"
  },
  
  {
    question : "What is the Jersey number of Virat Kohli? ",
    answer : "18"
  },

  {
    question : "Nick name of Virat Kohli? ",
    answer : "Chiku"
  },

  {
    question : "Birth Place of Virat Kohli? ",
    answer : "Delhi"
  },

  {
    question : "Second Favourite sport of Virat Kohli? ",
    answer : "Football"
  }
];

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Right ~'_'~");
    score++;
  }
  else{
    console.log("Wrong ^._.^");
  }
  
  console.log("Current Score: "+ score);
  console.log("-----------------------");
  
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores(){
  console.log("Your Score : "+score);
}

game();
showScores();
