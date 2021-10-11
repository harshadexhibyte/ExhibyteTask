"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">4 000€</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
const createUserName = function (user) {
  const username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join(" ");
  return username;
};

console.log("****************USER NAME *******************");
console.log(createUserName("Harshad satasiya"));
const user = "Harshad Satasiya";

/////////////////////////////////////////////////

let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.splice(0, 2));
console.log(arr);

let arr2 = [1, 2, 3, 4, 5, 6];
console.log(arr2.reverse());

const mixarr = arr.concat(arr2);
console.log(mixarr);
console.log(...arr, ...arr2);
console.log(mixarr.join("-"));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You Deposited ${movement} of ${i}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}of ${i}`);
  }
}

console.log("*************************************");

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

console.log("*************Currencies**************");
currencies.forEach(function (key, value, map) {
  console.log(`${key} :${value}`);
});

const uniqueCurrencies = new Set([
  "USD",
  "EUR",
  "NIR",
  "GBP",
  "NIR",
  "GBP",
  "NIR",
  "GBP",
]);

console.log(uniqueCurrencies.entries());

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov , i , arr) => {
//     if(mov > 0){
//         return `movements ${i + 1}: You are diposited ${mov}`;
//     }
//     else{
//         return `movements ${i + 1}: You are diposited ${Math.abs(mov)}`;
//     }
// });
movements.filter(function (mov) {});
console.log("*********************movements****************************");
console.log(movements);

const depositeFor = [];
for (const mov of movements) if (mov > 0) depositeFor.push(mov);
console.log(depositeFor);

const withdrawal = movements.filter((mov) => mov < 0);
console.log(withdrawal);

// console.log(movements);
// movements.reduce();

const calAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
};
calAverageHumanAge([1, 2, 4, 1, 1, 15, 8, 3]);
calAverageHumanAge([2, 4, 5, 69, 7, 8, 9, 10]);
