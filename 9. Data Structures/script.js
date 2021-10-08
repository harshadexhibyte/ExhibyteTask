"use strict";
const restaurent = {
  name: "The Spicy",
  location: "Mota Varachha Surat",
  catagories: ["indian", "punjabi", "chinese"],
  starterManu: ["garlic", "caprese salad", "pasta", "fruits"],
  mainManu: ["fastfood", "pizza", "dhosa"],
  OpeningHours: {
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
  },
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

const { name, OpeningHours, catagories } = restaurent;
console.log(OpeningHours);

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
  prompt("Lets  make pasta ?Ingrediant "),
  prompt("Ingrediant 2"),
  prompt("Ingrediant 3"),
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
