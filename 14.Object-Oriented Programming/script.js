"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   console.log(this.firstName)

  //   this.calcAge = function () {
  //     console.log(02021 - birthYear);
  //   };
};

const Harshad = new Person("Harshad", 2000);
console.log(Harshad);
const Ravi = new Person("Ravi", 2002);
const Ronak = new Person("Ronak", 1999);
const Rahul = new Person("Rahul", 2001);

const jay = "jay";

console.log(Ravi, Ronak, Rahul);

console.log(jay instanceof Person);
console.log(Ravi instanceof Person);

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};
Ravi.calcAge();
Ronak.calcAge();
Harshad.calcAge();

console.log(Harshad.__proto__);
console.log(Harshad.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(Ravi));
console.log(Person.prototype.isPrototypeOf(Ronak));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(Person.prototype);
console.log(Person.__proto__);

console.log(Harshad.hasOwnProperty("firstName"));
console.log(Harshad.hasOwnProperty("birthYear"));

console.log(Harshad.__proto__);
console.log(Harshad.__proto__.__proto__);
console.log(Harshad.__proto__.__proto__.__proto__);

// console.log(Harshad.prototype.constructor);
console.log(true);

const arr = [3, 4, 4, 5, 5, 6, 7, 8, 9, 10];
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir((x) => x + 1);

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.birthYear}`);
  }
  get age() {
    return 2021 - this.birthYear;
  }
}

const raghu = new PersonCl("raghu", 2000);
console.log(raghu);
raghu.calcAge();
console.log(raghu.__proto__ === PersonCl.prototype);

const accounts = {
  owner: "Harshad",
  movements: [100, 200, 300, 400, 500],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(accounts.latest);
accounts.latest = 600;
console.log(accounts.movements);
