alert('Welcome to Quiz Ninja!');// introduction to quiz Ninja

const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"] // array of questions
];

let score = 0 // initial score

for (const [question, answer] of quiz) {
  const response = prompt(question);
  if (response === answer) {
    alert('Correct');
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`)
  }
}//game loop

//At the end of the game, report the player's score 
alert(`Game over, you score ${score} point${score !== 1 ? 's' : ''}`); 