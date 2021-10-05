let js = 'amazing';
if (js === 'amazing') alert('TEST')

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