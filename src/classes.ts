class ReferenceItem {
  private _itemId: number = 0;
  //   public id: number;
  //   public price: number;
  //   public name: string;
  //   public counter: number;
  static count: number = 0;

  //   constructor(id: number, price: number, name: string, counter: number) {
  //     // increment the number of children we have for this class
  //     ReferenceItem.count++;
  //     this.id = id;
  //     this.price = price;
  //     this.name = name;
  //     this.counter = counter
  //     console.log("Constructor is always called when a class Object is created.");
  //   }

  // you can avoid initialization at the top by just using this type of parametrized constructor
  constructor(
    public id: number,
    public price: number,
    public name: string,
    public counter: number
  ) {}

  // getters and setters allow you to perform some logic before setting values and getting them too
  // maybe checking if a user is authenticated before allowing the user to gain access? idk
  get itemID(): number {
    return this._itemId;
  }

  set itemID(newItem: number) {
    this._itemId = newItem;
  }

  // basic instance method
  doSomething() {
    console.log("Something has been done");
  }

  static logNumberOfChildren() {
    console.log(`We have a total of ${ReferenceItem.count} children so far`);
  }
}

const shoe = new ReferenceItem(2234, 99, "Balenciaga", 44);
const shoe2 = new ReferenceItem(2234, 99, "Toms", 22);
const shoe3 = new ReferenceItem(2234, 99, "Gucci", 16);
const shoe4 = new ReferenceItem(2234, 99, "Prada", 44);
console.log(shoe2.counter);

ReferenceItem.logNumberOfChildren(); // this should print 4!!
