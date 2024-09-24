interface Readable {
  read(): string;
}

class TextBook implements Readable {
  read(): string {
    const message = "I am being read";
    return message;
  }
}

const BookOne: TextBook = new TextBook();
console.log(BookOne.read());
