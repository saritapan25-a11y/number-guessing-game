// Use of readline module which allows to take input from the terminal.
const readline = require("readline");

// Create an interface
const rl = readline.createInterface({
  input: process.stdin, // Reads user input from the terminal 
  output: process.stdout // prints output to the terminal
});

//Generate Random number 
const secretNumber = Math.floor(Math.random() * 10) + 1;

// funtion to ask for a guess
function askGuess() {
  rl.question("\n Guess a number between 1 and 10: ", function (guess) {
    if (parseInt(guess) === secretNumber) {
      console.log(" You guessed correctly!\n");
      rl.close();
    } else {
      console.log(" \n Wrong guess, try again.\n");
      if (guess > secretNumber) {
  console.log(" Hint --> Too high ,Please enter less than " , guess);
} else if (guess < secretNumber) {
  console.log(" Hint --> Too low , Please enter greater than" , guess);
}
      askGuess();
    }
  });
}

askGuess();
