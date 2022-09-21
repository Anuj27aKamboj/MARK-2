var readlineSync = require("readline-sync");

function welcome() {
  var userName = readlineSync.question("Please enter your name - ");

  console.log("Welcome " + userName);
  console.log("Let's Play the Quiz on VIRAT KOHLI");
  console.log();
  console.log("**You can either enter the option or type complete answer**");
  console.log();
}

var score = 0;

var questions = [
  {
    question: "Date of Birth of Virat Kholi? ",
    answerA: "5 November",
    answerB: "18 August"
  },

  {
    question: "Wife of Virat Kholi? ",
    answerA: "Anushka Sharma",
    answerB: "Anushka Kohli"
  },

  {
    question: "What is the present age of Virat Kohli? ",
    answerA: "33",
    answerB: "35"
  },

  {
    question: "What is the Jersey number of Virat Kohli? ",
    answerA: "18",
    answerB: "10"
  },

  {
    question: "Nick name of Virat Kohli? ",
    answerA: "Chiku",
    answerB: "Kela"
  },

  {
    question: "Birth Place of Virat Kohli? ",
    answerA: "Delhi",
    answerB: "Amritsar"
  },

  {
    question: "Second Favourite sport of Virat Kohli? ",
    answerA: "Football",
    answerB: "Cricket"
  }
];

function play(question, answerA, answerB) {
  console.log(question);
  console.log("A:" + answerA + "\t" + "B:" + answerB);
  var userAnswer = readlineSync.question("Enter your answer: ");

  if ((userAnswer.toUpperCase() === answerA.toUpperCase()) || (userAnswer.toUpperCase() === "A")) {
    console.log("Right ~'_'~");
    score++;
  }
  else {
    console.log("Wrong ^._.^");
  }

  console.log("Current Score: " + score);
  console.log("-----------------------");

}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answerA, currentQuestion.answerB);
  }
}

function showScores() {
  console.log("Your Score : " + score);
}

welcome();
game();
showScores();
