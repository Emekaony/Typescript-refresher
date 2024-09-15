// simple function with type annotations:
function simpleFunc(a: number, b: number): number {
  const returnValue = a + b;
  return returnValue;
}

type Person = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

// dealing with optional parameters
function greetPerson(firstName: string, lastName: string, middleName?: string) {
  if (middleName) {
    console.log(`Hello ${firstName} ${middleName} ${lastName}`);
  } else {
    console.log(`Hello ${firstName} ${lastName}`);
  }
}

const Emeka: Person = {
  firstName: "Nnaemeka",
  lastName: "Onyeokoro",
};

const Kamsi: Person = {
  firstName: "Kamsiriochi",
  middleName: "Kam babay",
  lastName: "Onyeokoro",
};

greetPerson(Emeka.firstName, Emeka.lastName);
greetPerson(Kamsi.firstName, Kamsi.lastName, Kamsi.middleName);

// dealing with variadic / rest parameters
function makeIceCream(userName: string, ...toppings: string[]) {
  for (let topping of toppings) {
    console.log(
      `Hi there ${userName}, adding ${topping} to your icecream right now.`
    );
  }
}

const toppings: string[] = ["pepper", "garlic", "sauce", "lemon"];
makeIceCream(Emeka.firstName, ...toppings); // u can also do the reverse when u expect rest parameters
console.log(...[1, 2, 3, 4]);

// basics of arrow functions
let add = (x: number, y: number) => x + y;

// use higher order functions like filter
let numbersToFilter = [1, 99, 403, 55, 31, 2, 1, 44, 901];
let highScores: number[];

highScores = numbersToFilter.filter((element) => {
  return element > 50;
});
console.log(`Here's what's left after filtering: ${highScores}`);
