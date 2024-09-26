type Book = {
  title: string;
  author: string;
  prince: number;
};

let historyBook = new Array<Book>(5);
console.log(historyBook);

// generic functions
function genericHello<T>(name: T): T {
  console.log(name);
  return name;
}

let firstHello = genericHello("kamsi");
// there really isn't much to Generics!

interface tt {
  name: string;
}

// there are more advanced things like type constraints and more, but they're not necessary right now!
