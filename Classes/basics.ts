class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class UserShortCut {
  constructor(public name: string, public age: number) {}
}

const max = new User('Max', 40);
const fred = new User('Fred', 42);
const conor = new UserShortCut('Conor', 40);

console.log(max, fred, conor);