/*
Notes on abstract classes:
*/

abstract class AbstractVideoExample {
  constructor(public director: string, public title: string) {}

  // noimplementation details needed for abstract methods
  abstract printCredits(): void;

  // can still have regular methods with implementations
  displayTitle() {
    console.log(
      `You are currently watching: ${this.title} by ${this.director}`
    );
  }
}

class AbstractInheritance1 extends AbstractVideoExample {
  // when inheriting from an abstract class, u must implement all abstract methods
  printCredits(): void {
    console.log("This is from the inherited class");
  }
}

const example1: AbstractVideoExample = new AbstractInheritance1(
  "Nnaemeka",
  "The art of software engineering"
);
example1.displayTitle();
example1.printCredits();
