import * as readline from "readline";

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to ask a question and wait for user input
function askQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

// Main guessing game function
async function guessingGame() {
  const secretNumber = Math.floor(Math.random() * 10) + 1; // Secret number between 1 and 10
  let attempts = 0;

  console.log("Welcome to the guessing game! Guess a number between 1 and 10.");

  while (true) {
    const userGuess = await askQuestion("Enter your guess: ");
    attempts++;

    const guess = parseInt(userGuess);

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
    } else if (guess < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(
        `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts.`
      );
      break; // Exit the loop
    }
  }

  rl.close(); // Close the readline interface when done
}

// Start the game
guessingGame();
