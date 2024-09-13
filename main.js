const quiz = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];// array in an object

// View Object
const view = {
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  start: document.getElementById('start'),
  response: document.querySelector('#response'),
  timer: document.querySelector('#timer strong'),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },

  show(element) {
    element.style.display = 'block';
  },
  hide(element) {
    element.style.display = 'none'
  },

  setup() {
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score, game.score);
    this.render(this.result, '');
    this.render(this.info, '');
    this.resetForm();
  },

  resetForm() {
    this.response.answer.value = '';
    this.response.answer.focus();
  },

  teardown() {
    this.hide(this.question);
    this.hide(this.response);
    this.show(this.start);
  }
};

const game = {
  start(quiz) {
    this.score = 0
    this.questions = [...quiz];// copies the quiz array
    view.setup();//
    this.ask();
  },

  ask(name) {
    if (this.question.length > 0) {
      this.question = this.questions.pop();
      const question = `What is ${this.question.name}'s real name?`;
      view.render(view.question, question);
    }
    else {
      this.gameOver();
    }
  },

  check(event) {
    event.preventDefault();
    const response = view.response.answer.value;
    const answer = this.question.realName;
    if (response === answer) {
      view.render(view.result, 'Correct!', { 'class': 'correct' });
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(view.result, `wrong! The correct answer was ${answer}`, { 'class': 'wrong' });
    }
    view.resetForm();
    this.ask();
  },

  gameOver() {
    view.show(view.start);
    view.render(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    view.teardown();
    clearInterval(this.timer);
  },

  countdown() {
    game.secondsRemaining--;
    view.render(view.timer, game.secondsRemaining);
    if (game.secondsRemaining < 0) {
      game.gameOver()
    }
  }
}

//event listeners and initial setup
game.start(quiz);
view.hide(view.start);
view.start.addEventListener('click', () => game.start(quiz), false);
view.response.addEventListener('submit', (event) => game.check(event), false);
view.hide(view.response);
this.secondsRemiaining = 20;
this.timer = setInterval(this.countdown, 1000);// start countdown

