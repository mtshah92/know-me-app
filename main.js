var name = prompt("Enter your name: ");
console.log(`Welcome ${name}! to know About Myself`);

var score = 0;

function qna(userAnswer, answer) {
  if (userAnswer === answer) {
    console.log("Correct");
    score += 1;
  } else {
    console.log("Incorrect");
  }
}

var quiz = [
  {
    question: "Where do I Live?",
    answer: "himatnagar",
  },
  {
    question: "Where I work?",
    answer: "wipro",
  },
];

for (var i = 0; i < quiz.length; i++) {
  var Answer = prompt(quiz[i].question);
  qna(Answer, quiz[i].answer);
  console.log(score);
}

console.log(" Total Score: " + score);
