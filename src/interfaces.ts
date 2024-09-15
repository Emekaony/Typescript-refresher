/*
An interface is like a contract, anything that implements it must implement all themethods and properties
inside of that interface.

They do not compile to anything in javascript, they are just used by ts.
*/

interface Duck {
  walk(): void;
  swim(): void;
  quak(): void;
}

const sayHelloToDuck = (duck: Duck) => {
  duck.walk();
};

let probablyDuck = {
  walk: () => console.log("I the Duck am walking."),
  swim: () => console.log("I the Duck am swimming."),
  quak: () => console.log("Duck here saying: Quak Quak."),
};

// now even though the object above wasn't explicitly declared a type of Duck
// because it satisfies everything a Duck has, it will work. Called Duck Typing
sayHelloToDuck(probablyDuck);

// taking advantage of interface return types
interface HumanBeing {
  firstName: string;
  lastName: string;
}

function GetAllHumanBeings(): HumanBeing[] {
  return [
    { firstName: "emeka", lastName: "Onyeokoro" },
    { firstName: "Salinha", lastName: "Kieu" },
    { firstName: "Daniel", lastName: "adedeji" },
  ];
}

// interfaces allow us use optional parameters too
interface TryingOptionalValues {
  first: string;
  optionalParam?: number;
}

// classes can extend interfaces
interface Librarian {
  doWork: () => void;
}

// be careful, classes implement interfaces, they do not extend them!
class ElementaryLibrarian implements Librarian {
  doWork() {
    console.log("Reading to children.");
  }
}

const ll: ElementaryLibrarian = new ElementaryLibrarian();
ll.doWork();
