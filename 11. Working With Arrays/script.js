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

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputCloseUsername.value
  );
  console.log("****************CURRENT ACCOUNT ***************");
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `WelCome Back ${
      currentAccount.owner.split(" ")[0]
    }`;
    displayMovements(currentAccount.movements);
  }
  containerApp.style.opacity = 100;
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    t;
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    console.log(index, "***********************findIndex*********************");
  }
});

console.log("****************USER NAME *******************");
console.log(createUserName("Harshad satasiya"));
const user = "Harshad Satasiya";

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);
labelSumIn.textContent = `2000 EUR`;
labelSumOut.textContent = `3000 EUR`;
labelSumInterest.textContent = `62.24 EUR`;
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
console.log(movements);
const deposites = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposites);

const depositeForNagative = [];
for (const mov of movements) if (mov < 0) depositeForNagative.push(mov);
console.log(depositeForNagative);

const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`${i},and ${acc}`);
  return acc + curr;
});
console.log(balance);

console.log("************FIND METHODS**************");
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

const ages = [3, 10, 18, 20, 22, 35, 65, 8, 20, 22];
console.log(ages.includes(-30));

function checkAge(age) {
  return age > 50;
}
console.log(ages.every(checkAge));

const arrayOne = [[1, 2, 3], [4, 5, 6], 7, 8];
const arrayTwo = [["a", " b", "c"], [11, 22, 33], true, 8.33];
const arrayThree = [
  [
    ["a", " b", "c"],
    [11, 22, 33],
  ],
  true,
  8.33,
];
console.log(arrayOne);
console.log(arrayOne.flat());
console.log(arrayTwo.flat());
console.log(arrayThree.flat(2));

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);

const allMovements = accountMovements.flat(2);
console.log(allMovements);

const StringArray = ["Jay", "ravi", "alish", "zinu", "pinal"];
console.log(StringArray);
console.log(StringArray.sort());
console.log(ages);
console.log(ages.sort());

const x = new Array(7);
console.log(7);

x.fill(32, 2, 5);
x.fill(2);
console.log(x);

const y = Array.from({ length: 7 }, () => 1);
console.log(y);
