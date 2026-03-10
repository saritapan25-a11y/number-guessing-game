const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function askGuess() {
  rl.question("\n Guess a number between 1 and 10: ", function (guess) {
    if (parseInt(guess) === secretNumber) {
      console.log("🎉 You guessed correctly!\n");
      rl.close();
    } else {
      console.log("❌ Wrong guess, try again.\n");
      askGuess();
    }
  });
}

askGuess();
