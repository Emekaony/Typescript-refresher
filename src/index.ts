// npx ts-node <name_of_file>

// union types allow one value to have multiple types
let someValue: number | string = "emeka";

// Arrays -> the holy grail
let numArray: Array<number> = [1, 2, 3, 4];
let strArray: Array<string> = ["kamsi", "chidera", "salinha", "dozie"];

// program flow
for (let tt in strArray) {
  console.log(`ur name is ${tt}`);
}

// using forEach
strArray.forEach((name, idx) => {
  if (name.length > 3) console.log(name, idx);
});

// using regular for loop
for (let i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

// using switch statements
const userName: string = "Olamide";
switch (userName) {
  case "Nnaemeka":
    console.log("The username is an igbo name");
    break;
  case "Olamide":
    console.log("The username is a Yoruba name");
    break;
  default:
    console.log("The username cannot be found");
    break;
}

// control-flow type analysis
const movieTitle: string = "Top Gun Maevrick";
let movieReview: string | number = GetReview(movieTitle);

function GetReview(movie: string): string | number {
  if (movie == "Top Gun Maevrick") {
    return "A classic";
  } else {
    return 7;
  }
}

if (typeof movieReview == "string") {
  // hover over variable here and it shows string
  console.log(`Review: ${movieReview}`);
} else {
  // and then do the same here and it shows number, javascript should have been ts from the get-go
  console.log(`Rating: ${movieReview}`);
}
