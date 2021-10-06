'use strict';

let js = 'amazing';

// if (js === 'amazing') alert('TEST')

console.log(40 + 10 + 20 - 50 + 100)

let FirstName = 'Satasiya';
let LastName = 'Harshad';
let age = 21;
let PI = 3.14;
let a = true;
let undifine;

console.log(FirstName + " " + LastName);
console.log(age);
console.log(PI);
console.log(a);
console.log(undifine);

console.log(typeof (age));

age = 30;
console.log(age)
var job = 'delevoper';
job = 'teacher';
console.log(job)

const FullName = 'SATASIYAHARSHAD';
console.log(FullName)

let x = 10 + 5;
x--;
x++;
x + 2;
x ** x;
console.log(x)


const firstname = 'harshad';
const lastname = 'satasiya';
const bod = 2000;
const year = 2021;

const info = "I'am" + " " + firstname + ' ,a ' + (year - bod) + ' years old ' + job + '!';
console.log(info);

const newinfo = `I 'am ${firstname}`;
console.log(newinfo)
console.log("This is Multiline \nTesting")



if (age >= 18) {
    console.log("You can start Driving License");
} else {
    console.log(`You are yong wait for another ${18 - (year - bod)} year`);
}

const inputYear = '2021';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 2021);


let iamTrue = true;
let iamFalse = false;

console.log(iamTrue && iamFalse);
console.log(iamTrue || iamFalse);
console.log(!iamTrue);

let mark = 30;
if (mark >= 70 && mark <= 100) {
    console.log('Yor are in Districtions class')
}
else if (mark >= 60 && mark <= 69) {
    console.log('You are in first class')
}
else if (mark >= 50 && mark <= 59) {
    console.log('You are in second class')
}
else if (mark >= 35 && mark <= 49) {
    console.log('You are in pass class')
}
else {
    console.log('You are fail')
}



const day = 'wednesday';

switch (day) {
    case 'monday':
        console.log('School Session')
        break;
    case 'tuesday':
        console.log('School session')
        break;
    case 'wednesday':
        console.log('School Session')
        break;
    case 'thursday':
        console.log('School Session')
        break;
    case 'friday':
        console.log('School session')
        break;
    case 'saturday':
        console.log('Holiday Session')
        break;
    case 'sunday':
        console.log('Holiday Session')
        break;
}

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

// Functions
function myfunction() {
    console.log('Function Calling');
}
myfunction();

function Fruit(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const juicemsg = Fruit(4, 6);
console.log(juicemsg)

function cutFruits(fruits) {
    return fruits * 4;
}
cutFruits(4)

function MyName(name) {
    console.log(`My Name is ${name},`);
}
MyName('Harshad');

const FruitProccesor = function (oranges, apples) {
    const applesPieces = cutFruits(apples)
    const orangesPieces = cutFruits(oranges)
    const results = `${applesPieces} pieces of apple , ${orangesPieces} of Oranges`;
    return results;
}
console.log(FruitProccesor(2, 5));


const yearsArry = new Array(2020, 2021, 2022, 2023, 2024, 2025)
console.log(yearsArry)

const friends = ['ravi', 'jaymish', 'keval'];
console.log(friends)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])

console.log(friends.length)

friends.push('jay');
friends.push('sahil');
console.log(friends);

friends.pop();
console.log(friends);

friends.unshift('ronak');
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('keval'));
console.log(friends.indexOf('jaymish'));
console.log(friends.indexOf('ravi'));

console.log(friends.includes('keval'));  //true
console.log(friends.includes('harshad'));  //false

const data = {
    fname: 'satasiya',
    lname: 'harshad',
    email: 'harshad@gmail.com',
    bod: '2000',
    mobile: '7202848201',
    friend: ['ravi', 'jaymish', 'keval'],
    CalcBirth: function (birthYear) {
        return 2021 - birthYear;
    }

};
console.log(data.fname);
console.log(data.lname);
console.log(data.email);

// const msg = prompt(`choose the friend 1 to ${friends.length}`);
// console.log(friends[msg]);
console.log(data.CalcBirth(2000));

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Im repited ${rep} times`);
}
const types = [];
const MyArry = [
    'harshad',
    'satasiya',
    '2000',
    true,
    7202848201,
    'harshad@gmail.com',
]

for (let i = 0; i < MyArry.length; i++) {
    console.log(MyArry[i], typeof MyArry[i]);
    types.push(typeof MyArry[i]);
}
console.log(types);

for (let i = 0; i < MyArry.length; i++) {
    console.log(MyArry[i], typeof MyArry[i]);
    types.push([typeof MyArry[i], MyArry[i]]);
}
console.log(types);

for (let i = MyArry.length; i >= 0; i--) {
    console.log(i, MyArry[i]);
}
let repit = 1;
while (repit <= 10) {
    console.log(`While repit ${repit}`);
    repit++;
}

while (10 <= repit) {
    console.log(`While repit ${repit}`);
    repit--;
}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);

'use strict';
//-------------- Demo-Gussy-Number
const SecretNumber = Math.trunc(Math.random()*20+1);



let score = document.querySelector('.score').textContent = 20;
let highscore = 0;

// document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 
document.querySelector('.check').addEventListener('click',function () { 
    console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector('.message').textContent = 'No Number! Please Enter';   
    }
    else if(guess === SecretNumber ){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(guess > SecretNumber ){
        if(score > 0){
            document.querySelector('.message').textContent = 'To high Number !';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost The game!';
        }
    }
    else if(guess < SecretNumber ){
        if(score > 0){
            document.querySelector('.message').textContent = 'To Low Number !';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = 'You Lost The game!';
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    const  SecretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent = 'Start guessing!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = 0;

    document.querySelector('body').style.backgroundColor = '#222';
})

