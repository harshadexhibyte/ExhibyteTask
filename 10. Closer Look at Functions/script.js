"use strict";
const bookings = [];
const createBooking = function (
  flightNum,
  NumPassenger = 1,
  price = 199 * NumPassenger
) {
  const booking = {
    flightNum,
    NumPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH303");
createBooking("LH303", 2, 299);
createBooking("LH303", 5);
createBooking("LH303", 3);
createBooking("LH303", undefined, 10);

const flight = "LH234";
const harshad = {
  name: "Harshad Satasiya",
  passport: "4589696586",
};
const checkIn = function (flightNum, Passenger) {
  flightNum = "LH999";
  Passenger.name = "Mr ." + Passenger.name;

  if (Passenger.passport === "4589696586") {
    alert("Check In");
  } else {
    alert("Wong Passport!");
  }
};

checkIn(flight, harshad);

const oneWord = function (str) {
  return str.replace("/ /g", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};
const tranform = function (str, fn) {
  console.log(`string ${fn(str)}`);
};
tranform("javascript is the best", upperFirstWord);
tranform("javascript is the best", oneWord);

const high5 = function () {
  console.log("Hie");
};

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Harshad");
greeterHey("Satasiya");

greet("hello")("hasrhad");

console.log(this);

// document.querySelector('.buy').addEventListener('click',)
const addText = (rate, value) => value + value * rate;

const addVAT = addText.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTextRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const runOnes = function () {
  console.log("This will never uns again");
};
runOnes();

(() => console.log("This is Also Never Run again"))();

const secureBooking = function () {
  let PassengerCount = 0;
  return function () {
    PassengerCount++;
    console.log(`${PassengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
booker();
booker();
booker();
console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
h();
f();

console.dir(g);
console.dir(f);
