// straight into enums
enum ContractType {
  PERMANENT = 11,
  TEMPORARY,
  APPRENTICE,
}

let employeeStatus: ContractType = ContractType.TEMPORARY;
console.log(employeeStatus.toString());

// we define an array then we check if it is one
let numberArr: number[] = [4, 2, 4, 6, 7, 4, 3];
if (Array.isArray(numberArr)) {
  console.log("It is indeed an array.");
} else {
  console.log("nahh");
}

// understand union types:
const addNumbers = (
  x: number | string,
  y: number | string
): number | string => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Both values MUST be of the same type.");
};

// intersection types are mostly used with interfaces when you want to create
// a type that's a hybrid of two different types
interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

// so managementEmployee combines both Employee and Manager type together
type ManagementEmployee = Employee & Manager;
const newManager: ManagementEmployee = {
  age: 23,
  employeeID: 2234,
  stockPlan: true,
};

// tuples
const tup1: readonly [string, number] = ["emeka", 99]; // best to make tuples readonly
const ll: readonly number[] = [33, 4, 5];

// symbols allow u create unique stuff, learn more about them later
