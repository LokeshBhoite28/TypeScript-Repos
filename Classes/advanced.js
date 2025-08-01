"use strict";
class User1 {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const maxi = new User1("Max", "Muller");
console.log(maxi.fullName);
class User2 {
    firstName = "";
    lastName = "";
    set setFirstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid Name");
        }
        this.firstName = name;
    }
    set setLastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid Name");
        }
        this.lastName = name;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const maxi1 = new User2();
maxi1.setFirstName = 'Max';
maxi1.setLastName = 'Muller';
console.log(maxi1.fullName);
