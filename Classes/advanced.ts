class User1 {
  constructor(private firstName: string, private lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const maxi = new User1("Max", "Muller");
console.log(maxi.fullName);

class User2 {
  protected firstName: string = "";
  private lastName: string = "";

  set setFirstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }

    this.firstName = name;
  }

  set setLastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Name");
    }

    this.lastName = name;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static eid = "USER";
}

console.log(User2.eid);

const maxi1 = new User2();
maxi1.setFirstName = "Max";
maxi1.setLastName = "Muller";
console.log(maxi1.fullName);

// inheritance
class Employee extends User2 {
  constructor(private jobTitle: string) {
    super();
    // super.setFirstName = "Max";
  }

  work() {
    console.log(this.firstName);
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}
