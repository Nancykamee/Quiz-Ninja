alert('Welcome to Quiz Ninja!');// introduction to quiz Ninja

const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Wonder woman's real name?", "Diana Prince"],
  ["What is Batman's real name?", "Bruce Wayne"] // array of questions
];

function start(quiz) {
  let score = 0 // initial score

  //main game loop
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }
  //end of main game loop

  gameOver();

  //function declarations
  function ask(question) {
    return prompt(question);
  }
  function check(response, answer) {
    if (response === answer) {
      alert('Correct!');
      score++
    } else {
      alert(`Wrong! The right answer was ${answer}`);
    }
  }

  function gameOver() {
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz);