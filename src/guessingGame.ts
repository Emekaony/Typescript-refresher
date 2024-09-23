// get the user input and see if it matches what the computer guessed
// if it does, tell the user how many times it took the compter to guess it
// if after 5 guesses the computer doesn't get it, quit
// if user input is 'q', quit as well
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// learn more about when to use promises!
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function guessingGame() {
  const MIN: number = 0;
  const MAX: number = 10;
  const computerGuess: number = MIN + Math.ceil(Math.random() * (MAX - MIN));
  let attempts: number = 0;
  console.log("Welcome to guess game 🤧");

  // game loop
  while (true) {
    attempts++;
    const userInput = await askQuestion(
      "Enter a number between 0 and 10, enter q to quit: "
    );
    if (userInput === "q") {
      console.log("End of the game!");
      break;
    } else if (attempts > 5) {
      console.log("Used up max number of attempts, try again later");
      break;
    }

    const guess: number = parseInt(userInput);
    if (guess < computerGuess) {
      console.log("Too low, try again");
    } else if (guess > computerGuess) {
      console.log("Too high, try again");
    } else {
      console.log(`Correct!! you got this right in ${attempts} attempts`);
      break;
    }
  }
  rl.close();
}
guessingGame();
