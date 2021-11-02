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
  // set fullName(name){
  //   if(name.includes(" "))
  // }
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

console.log(Array.from(document.querySelector("h1")));

console.log(Number.parseFloat(12));

Person.hey = function () {
  console.log("Hey there!");
  // console.log(this);
};
Person.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const Keval = Object.create(PersonProto);
console.log(Keval);
Keval.name = "Keval";
Keval.birthYear = "2001";
Keval.calcAge();
console.log(Keval.__proto__);

const jaymin = Object.create(PersonProto);
jaymin.init();
console.log("Divyesh", 1999);
jaymin.calcAge();

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} it going to at ${this.speed} km/h`);
  }
  brack() {
    this.speed -= 5;
    console.log(`${this.make} it going to at ${this.speed} km/h`);
  }
  get SpeedUS() {
    return this.speed / 1.6;
  }
}

const ford = new carCl("ford", 120);
console.log(ford.SpeedUS);
ford.accelerate();
ford.accelerate();
console.log(ford);
ford.brack();

const Man = function (firstName, birthYear) {
  this.firstName = firstName;
  this.lastName = birthYear;
};

Man.prototype.calcAge = function () {
  console.log(2021 - birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}.`);
};

const mike = new Student("mike", 2021, "BCA");
console.log(mike.introduce());

// class StudentCl extends PersonCl() {
//   constructor(firstName, course) {
//     super(firstName, birthYear);
//   }
// }
// 19-10 ->11 + 30 + 15
// 15-12
// const divya = new StudentCl("Harshad Satasiya", 2021, "Computer Science");
class Account {
  locale = navigator.language;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`ThanQ for Opening Account ${owner}.`);
  }
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }
  approwLoad(val) {
    return true;
  }
  requestLoad(val) {
    if (this.approwLoad(val)) {
      this.deposit(val);
      console.log("Load approw");
    }
  }
  static helper() {
    console.log("Helper");
  }
}
const acc1 = new Account("raghu", "INR", 1111);

// acc1.movements.push(250);
// acc1.movements.push(-200);
acc1.deposit(250);
acc1.withdraw(150);
console.log(acc1);
acc1.requestLoad(1000);
acc1.approwLoad(1000);

console.log(acc1);
console.log(acc1.pin);
Account.helper();

// acc1.deposit(500).deposit(200).withdraw(25).requestLoad(25000).withdraw(4000);
// console.log(acc1.getMovements());
