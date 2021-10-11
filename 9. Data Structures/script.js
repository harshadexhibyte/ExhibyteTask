"use strict";
const weekAllDays = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
const OpeningHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 12,
    close: 22,
  },
  sat: {
    open: 12,
    close: 22,
  },
};

const restaurent = {
  name: "The Spicy",
  location: "Mota Varachha Surat",
  catagories: ["indian", "punjabi", "chinese"],
  starterManu: ["garlic", "caprese salad", "pasta", "fruits"],
  mainManu: ["fastfood", "pizza", "dhosa"],
  OpeningHours: OpeningHours,
  order: function (startIndex, Mainindex) {
    return [this.starterManu[startIndex], this.starterManu[startIndex]];
  },
  orderDelivery: function ({
    startIndex = 1,
    Mainindex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order Recived ${this.starterManu[startIndex]} and ${this.starterManu[startIndex]} will be deliver to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is Your declisios pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};

console.log(restaurent);
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(a, b, c);
console.log(arr);

const [first, second] = restaurent.catagories;
console.log(first, second);

const [starter, main] = restaurent.order(2, 0);
console.log(starter, main);

// const { name, OpeningHours, catagories } = restaurent;
// console.log(OpeningHours);

// SPREAD OPERATOR.
const array1 = [6, 7, 8];
const badNewArray = [1, 2, array1[0], array1[1], array1[2]];
console.log(badNewArray);
const newArray = [1, 2, ...array1];
console.log(newArray);
const Nemanu = [...restaurent.mainManu, "Gujrati"];
console.log(Nemanu);
const fullManu = [...restaurent.starterManu, ...restaurent.mainManu];
console.log(fullManu);

const str = "harshad";
const latters = [...str, " ", "S."];
console.log(latters);

const ingredient = [
  // prompt("Lets  make pasta ?Ingrediant "),
  // prompt("Ingrediant 2"),
  // prompt("Ingrediant 3"),
];
console.log(ingredient);

restaurent.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
restaurent.orderPasta(...ingredient);

const NewRestoraurant = {
  foundedIn: 1998,
  ...restaurent,
  founder: "mr pandia",
};
console.log(NewRestoraurant);

const restorentCopy = { ...restaurent };
restorentCopy.name = "New Spicy Restoraurant";
console.log(restorentCopy.name);
console.log(restaurent.name);

const array3 = [1, 2, 3, ...[4, 5, 6]];
console.log(array3);

const [fastfood, , dhosa, ...otherFood] = [
  ...restaurent.mainManu,
  ...restaurent.starterManu,
];
console.log(fastfood, dhosa, otherFood);

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);

// REST OPERATOR.
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [fastfoodInManu, pizzaInManu, ...otherFoods] = [
  ...restaurent.mainManu,
  ...restaurent.starterManu,
];
console.log(fastfoodInManu, pizzaInManu, otherFoods);

const { sat, ...weekdays } = restaurent.OpeningHours;
console.log(weekdays);

const addition = function (msg, ...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(msg, sum);
};
addition("2 Argument sum", 2, 3);
addition("3 Argument sum", 2, 3, 4);
addition("5 Argument sum", 2, 3, 4, 5, 6);
addition("8 Argument sum", 2, 3, 4, 5, 6, 7, 8, 9);

const value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
addition(...value);

console.log(4 || "HARSHAD");
console.log("" || "HARSHAD");
console.log(true || 0);
console.log(undefined || null);

console.log("*******AND*******");
console.log("HARSHAD" && 5);
console.log("HARSHAD" && 5 && null && 25);

const game = {
  team1: "python",
  team2: "javascript",
  players: [
    ["ravi", "raj", "keval", "ronak", "sunny", "divya"],
    ["ruta", "dhruti", "abhishek", "yash", "jaymin", "sahil"],
  ],
  score: "4:0",
  scored: ["first", "second", "third"],
  date: "Nov 9th 2021",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, fieldPlayer] = players1;
console.log(gk, fieldPlayer);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(players1);
console.log(players2);

//  Looping Arrays The for-of Loop
console.log(fullManu);
for (const item of fullManu.entries()) {
  console.log(`${item}[0]`);
}
console.log("________________Players_________________");
for (const player of allPlayers.entries()) {
  console.log(player);
}

for (const restorentcatagoriesList of restaurent.catagories) {
  console.log(restorentcatagoriesList);
}

console.log(restaurent.OpeningHours.thu);
console.log(restaurent.OpeningHours.thu.open);

if (restaurent.OpeningHours && restaurent.OpeningHours.thu.open)
  console.log(restaurent.OpeningHours.thu.open);

if (restaurent.OpeningHours && restaurent.OpeningHours?.thu.open)
  console.log(restaurent.OpeningHours.thu.open);

for (const day of Object.keys(weekAllDays)) {
  console.log(day);
}

const orderSet = new Set(["pizza", "pasta", "pasta", "pasta", "pizza"]);
console.log(orderSet);
console.log(new Set("HARSHAD"));
console.log(orderSet.size);
orderSet.add("Megi");
console.log(orderSet);
orderSet.delete("pasta");
console.log(orderSet);

for (let order of orderSet) console.log(order);

const rest = new Map();
const key1 = "str",
  key2 = {},
  key3 = function () {};

rest.set(key1, "This is String");
rest.set(key2, "this is Blank Object");
rest.set(key3, "This is an empty function");

console.log(rest);

const airline = "TAP air portugal";
const plane = "Airbus A320 neo";
console.log(plane);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log("B737".length);
console.log(airline.indexOf("t"));
console.log(airline.lastIndexOf("t"));

console.log(airline.slice(8, 16));
console.log(airline.slice(0, airline.lastIndexOf(" ") + 1));
console.log(airline.slice(-12));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You Got Middle Seat");
  else console.log("you got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const email = "admina@harshadsatasiya.com";
const loginemail = "  Admin@HarshadSatasiya.com \n";
const loweremail = loginemail.toLowerCase();
const trimemail = loweremail.trim();

console.log(email);
console.log(loginemail);
console.log(loweremail);
console.log(trimemail);

const indian = "Rupee";
const USA = "Rupee";

const replaceVariable = USA.replace("Rupee", "Dollar");
console.log(replaceVariable);
console.log(plane.includes("A320"));
console.log(plane.startsWith("airbus"));
console.log(plane.startsWith("Airbus"));

if (plane.startsWith("Airbus") || plane.endsWith("neo"))
  console.log("Part of The new Airbus family");

console.log("a+very+nice+String".split("+"));

const [firstname, lastname] = "HARSHAD SATASIYA".split(" ");
console.log(firstname);
console.log(lastname);

const newName = ["Mr.", firstname.toLowerCase(), lastname.toLowerCase()].join(
  " "
);
console.log(newName);

const capilizeName = function (Getname) {
  const names = Getname.split(" ");
  const nameUpparCase = [];
  for (const n of names) {
    nameUpparCase.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpparCase.join(" "));
};
capilizeName("hello Friends");
capilizeName("Good Morning Friends");

const message = "GO to Gate 23";
console.log(message.padStart(25, "+").padEnd(27, "-"));

const mapAry = [10, 20, 30, 40];
const tempAry = mapAry.map(Mapping);
console.log(tempAry);
function Mapping(x) {
  return x * 100;
}
