"use strict";
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class UserShortCut {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const max = new User('Max', 40);
const fred = new User('Fred', 42);
const conor = new UserShortCut('Conor', 40);
console.log(max, fred, conor);
